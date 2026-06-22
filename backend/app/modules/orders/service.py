from __future__ import annotations

from datetime import date, datetime, timedelta
from typing import Optional

from fastapi import HTTPException, status

from app.core.rbac import Role
from app.modules.coupons.service import validate_coupon
from app.modules.products.service import price_for_role
from app.shared.store import credentials, inventory_lock, ledger, make_id, orders, products, users, warranty_tickets


def checkout(
    user_id: str,
    product_id: str,
    quantity: int,
    role: Role,
    affiliate_code: Optional[str] = None,
    coupon_code: Optional[str] = None,
) -> dict:
    user = users.get(user_id)
    product = products.get(product_id)
    if not user or not product:
        raise HTTPException(status_code=404, detail="User or product not found")

    unit_price = price_for_role(product, role)
    subtotal = unit_price * quantity
    discount = 0
    if coupon_code:
        validated_coupon = validate_coupon(coupon_code, role.value, subtotal)
        discount = validated_coupon["discount"]

    final_total = subtotal - discount
    if user["balance"] < final_total:
        raise HTTPException(status_code=status.HTTP_402_PAYMENT_REQUIRED, detail="Insufficient wallet balance")

    with inventory_lock:
        available = [
            credential
            for credential in credentials
            if credential["product_id"] == product_id and credential["status"] == "available"
        ][:quantity]
        if len(available) < quantity:
            raise HTTPException(status_code=409, detail="Not enough credential stock")

        order_id = make_id("order")
        purchased_at = datetime.utcnow()
        warranty_until = date.today() + timedelta(days=product["warranty_days"])

        for credential in available:
            credential["status"] = "sold"
            credential["order_id"] = order_id
            credential["user_id"] = user_id

        user["balance"] -= final_total
        if affiliate_code:
            users["u-ctv"]["commission_balance"] += int(final_total * 0.05)

        order = {
            "id": order_id,
            "user_id": user_id,
            "product_id": product_id,
            "quantity": quantity,
            "unit_price": unit_price,
            "discount": discount,
            "total": subtotal,
            "final_total": final_total,
            "status": "paid",
            "purchased_at": purchased_at,
            "warranty_until": warranty_until,
            "credentials": available,
        }
        orders[order_id] = order
        ledger.append({"id": make_id("ledger"), "type": "income", "amount": final_total, "note": f"Order {order_id}"})
        ledger.append(
            {
                "id": make_id("ledger"),
                "type": "expense",
                "amount": product["cost_price"] * quantity,
                "note": f"Inventory cost for {order_id}",
            }
        )
        return order


def list_user_orders(user_id: str) -> list[dict]:
    return [
        {
            "id": order["id"],
            "product_id": order["product_id"],
            "quantity": order["quantity"],
            "status": order["status"],
            "final_total": order["final_total"],
            "warranty_until": order["warranty_until"],
        }
        for order in orders.values()
        if order["user_id"] == user_id
    ]


def get_order(order_id: str) -> dict:
    order = orders.get(order_id)
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    return order


def open_warranty_ticket(order_id: str, reason: str) -> dict:
    order = orders.get(order_id)
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    if date.today() > order["warranty_until"]:
        raise HTTPException(status_code=409, detail="Warranty expired")

    for credential in order["credentials"]:
        credential["status"] = "claiming"

    ticket = {
        "id": make_id("ticket"),
        "order_id": order_id,
        "status": "pending",
        "reason": reason,
        "replacement_credential_id": None,
    }
    warranty_tickets[ticket["id"]] = ticket
    return ticket


def approve_replacement(ticket_id: str) -> dict:
    ticket = warranty_tickets.get(ticket_id)
    if not ticket:
        raise HTTPException(status_code=404, detail="Ticket not found")
    order = orders[ticket["order_id"]]

    with inventory_lock:
        replacement = next(
            (
                credential
                for credential in credentials
                if credential["product_id"] == order["product_id"] and credential["status"] == "available"
            ),
            None,
        )
        if replacement is None:
            raise HTTPException(status_code=409, detail="No replacement credential available")

        replacement["status"] = "sold"
        replacement["order_id"] = order["id"]
        replacement["user_id"] = order["user_id"]
        order["credentials"].append(replacement)
        ticket["status"] = "approved"
        ticket["replacement_credential_id"] = replacement["id"]
        return ticket


def list_warranty_tickets() -> list[dict]:
    return list(warranty_tickets.values())

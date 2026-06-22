from fastapi import APIRouter, Depends

from app.core.rbac import Role, get_current_role
from app.modules.orders.schema import CheckoutRequest, OrderDetailOut, OrderListOut, OrderOut, WarrantyRequest, WarrantyTicketOut
from app.modules.orders.service import approve_replacement, checkout, get_order, list_user_orders, list_warranty_tickets, open_warranty_ticket

router = APIRouter()


@router.post("/checkout", response_model=OrderOut)
def checkout_order(payload: CheckoutRequest, role: Role = Depends(get_current_role)) -> dict:
    return checkout(
        payload.user_id,
        payload.product_id,
        payload.quantity,
        role,
        payload.affiliate_code,
        payload.coupon_code,
    )


@router.get("", response_model=list[OrderListOut])
def my_orders(user_id: str = "u-retail") -> list[dict]:
    return list_user_orders(user_id)


@router.get("/warranty", response_model=list[WarrantyTicketOut])
def warranty_tickets() -> list[dict]:
    return list_warranty_tickets()


@router.get("/{order_id}", response_model=OrderDetailOut)
def order_detail(order_id: str) -> dict:
    return get_order(order_id)


@router.post("/{order_id}/warranty", response_model=WarrantyTicketOut)
def create_warranty_ticket(order_id: str, payload: WarrantyRequest) -> dict:
    return open_warranty_ticket(order_id, payload.reason)


@router.post("/warranty/{ticket_id}/approve", response_model=WarrantyTicketOut)
def approve_ticket(ticket_id: str) -> dict:
    return approve_replacement(ticket_id)

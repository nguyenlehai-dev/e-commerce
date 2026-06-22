from fastapi import HTTPException

from app.shared.store import coupons


def list_coupons() -> list[dict]:
    return list(coupons.values())


def validate_coupon(code: str, role: str, total: int) -> dict:
    coupon = coupons.get(code.upper())
    if not coupon or not coupon["active"]:
        raise HTTPException(status_code=404, detail="Coupon not found")
    if role not in coupon["allowed_roles"]:
        raise HTTPException(status_code=403, detail="Coupon not allowed for this role")
    if total < coupon["min_order_value"]:
        raise HTTPException(status_code=409, detail="Order total does not meet minimum value")

    if coupon["type"] == "percentage":
        discount = total * coupon["value"] // 100
    else:
        discount = coupon["value"]

    discount = min(discount, total)
    return {**coupon, "discount": discount, "final_total": total - discount}

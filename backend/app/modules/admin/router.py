from fastapi import APIRouter, Depends

from app.core.rbac import Role, require_roles
from app.shared.store import coupons, credentials, orders, users, warranty_tickets

router = APIRouter(dependencies=[Depends(require_roles({Role.ADMIN}))])


@router.get("/dashboard")
def dashboard() -> dict:
    return {
        "users": len(users),
        "orders": len(orders),
        "available_credentials": sum(1 for item in credentials if item["status"] == "available"),
        "pending_warranty_tickets": sum(1 for ticket in warranty_tickets.values() if ticket["status"] == "pending"),
        "active_coupons": sum(1 for coupon in coupons.values() if coupon["active"]),
        "sold_credentials": sum(1 for item in credentials if item["status"] == "sold"),
    }

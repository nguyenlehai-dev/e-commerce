from fastapi import APIRouter

from app.modules.coupons.schema import CouponOut, CouponValidateRequest
from app.modules.coupons.service import list_coupons, validate_coupon

router = APIRouter()


@router.get("", response_model=list[CouponOut])
def get_coupons() -> list[dict]:
    return list_coupons()


@router.post("/validate")
def check_coupon(payload: CouponValidateRequest) -> dict:
    return validate_coupon(payload.code, payload.role, payload.total)

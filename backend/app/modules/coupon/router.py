from fastapi import APIRouter, Depends

from .dependencies import get_coupon_service
from .schema import CouponResponse
from .service import CouponService

router = APIRouter()


@router.get("", response_model=list[CouponResponse])
def list_coupons(service: CouponService = Depends(get_coupon_service)) -> list[CouponResponse]:
    return service.list_coupons()

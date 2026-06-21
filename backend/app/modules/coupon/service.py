from .schema import CouponResponse


class CouponService:
    def list_coupons(self) -> list[CouponResponse]:
        return [CouponResponse(code="LUNA10", discount_percent=10, active=True)]

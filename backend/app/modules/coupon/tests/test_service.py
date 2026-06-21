from backend.app.modules.coupon.service import CouponService


def test_list_coupons_returns_active_coupon() -> None:
    assert CouponService().list_coupons()[0].active

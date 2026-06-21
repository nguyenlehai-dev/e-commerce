from backend.app.modules.shipping.service import ShippingService


def test_estimate_returns_fee() -> None:
    assert ShippingService().estimate().fee >= 0

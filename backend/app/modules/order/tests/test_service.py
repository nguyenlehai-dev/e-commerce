from backend.app.modules.order.service import OrderService


def test_list_orders_returns_demo_order() -> None:
    assert OrderService().list_orders()[0].code == "LB-1001"

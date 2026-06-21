from .service import OrderService


def get_order_service() -> OrderService:
    return OrderService()

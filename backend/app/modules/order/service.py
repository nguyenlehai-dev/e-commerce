from ...shared.constants.order_status import ORDER_STATUS_PENDING
from .schema import OrderResponse


class OrderService:
    def list_orders(self) -> list[OrderResponse]:
        return [OrderResponse(id=1, code="LB-1001", status=ORDER_STATUS_PENDING, total=420000)]

from fastapi import APIRouter, Depends

from .dependencies import get_order_service
from .schema import OrderResponse
from .service import OrderService

router = APIRouter()


@router.get("", response_model=list[OrderResponse])
def list_orders(service: OrderService = Depends(get_order_service)) -> list[OrderResponse]:
    return service.list_orders()

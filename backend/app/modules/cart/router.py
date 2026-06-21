from fastapi import APIRouter, Depends

from .dependencies import get_cart_service
from .schema import CartResponse
from .service import CartService

router = APIRouter()


@router.get("", response_model=CartResponse)
def get_cart(service: CartService = Depends(get_cart_service)) -> CartResponse:
    return service.get_cart()

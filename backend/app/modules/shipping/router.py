from fastapi import APIRouter, Depends

from .dependencies import get_shipping_service
from .schema import ShippingRate
from .service import ShippingService

router = APIRouter()


@router.get("/estimate", response_model=ShippingRate)
def estimate(service: ShippingService = Depends(get_shipping_service)) -> ShippingRate:
    return service.estimate()

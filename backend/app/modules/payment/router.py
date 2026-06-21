from fastapi import APIRouter, Depends

from .dependencies import get_payment_service
from .schema import PaymentMethod
from .service import PaymentService

router = APIRouter()


@router.get("/methods", response_model=list[PaymentMethod])
def list_methods(service: PaymentService = Depends(get_payment_service)) -> list[PaymentMethod]:
    return service.list_methods()

from fastapi import APIRouter, Depends

from .dependencies import get_product_service
from .schema import ProductResponse
from .service import ProductService

router = APIRouter()


@router.get("", response_model=list[ProductResponse])
def list_products(service: ProductService = Depends(get_product_service)) -> list[ProductResponse]:
    return service.list_products()

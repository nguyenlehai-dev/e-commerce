from fastapi import APIRouter, Depends

from .dependencies import get_category_service
from .schema import CategoryResponse
from .service import CategoryService

router = APIRouter()


@router.get("", response_model=list[CategoryResponse])
def list_categories(service: CategoryService = Depends(get_category_service)) -> list[CategoryResponse]:
    return service.list_categories()

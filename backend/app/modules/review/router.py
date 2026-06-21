from fastapi import APIRouter, Depends

from .dependencies import get_review_service
from .schema import ReviewResponse
from .service import ReviewService

router = APIRouter()


@router.get("", response_model=list[ReviewResponse])
def list_reviews(service: ReviewService = Depends(get_review_service)) -> list[ReviewResponse]:
    return service.list_reviews()

from .service import ReviewService


def get_review_service() -> ReviewService:
    return ReviewService()

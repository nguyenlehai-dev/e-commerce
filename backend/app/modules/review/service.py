from .schema import ReviewResponse


class ReviewService:
    def list_reviews(self) -> list[ReviewResponse]:
        return [ReviewResponse(id=1, product_id=1, rating=5, content="Very gentle on my skin.")]

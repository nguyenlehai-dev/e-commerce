from pydantic import BaseModel


class ReviewResponse(BaseModel):
    id: int
    product_id: int
    rating: int
    content: str

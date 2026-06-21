from pydantic import BaseModel


class CouponResponse(BaseModel):
    code: str
    discount_percent: int
    active: bool

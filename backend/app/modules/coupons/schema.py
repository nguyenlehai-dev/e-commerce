from pydantic import BaseModel


class CouponOut(BaseModel):
    code: str
    type: str
    value: int
    allowed_roles: list[str]
    min_order_value: int
    active: bool
    description: str


class CouponValidateRequest(BaseModel):
    code: str
    role: str
    total: int

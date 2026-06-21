from pydantic import BaseModel


class OrderResponse(BaseModel):
    id: int
    code: str
    status: str
    total: float

from pydantic import BaseModel


class CartItem(BaseModel):
    product_id: int
    name: str
    quantity: int
    unit_price: float


class CartResponse(BaseModel):
    items: list[CartItem]
    subtotal: float

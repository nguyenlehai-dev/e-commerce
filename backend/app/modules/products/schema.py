from datetime import date

from pydantic import BaseModel


class ProductVariantOut(BaseModel):
    id: str
    label: str
    multiplier: float


class ProductOut(BaseModel):
    id: str
    name: str
    category: str
    description: str
    image: str
    price: int
    retail_price: int
    wholesale_price: int
    collaborator_price: int
    warranty_days: int
    min_wholesale_quantity: int
    stock_available: int
    variants: list[ProductVariantOut]


class CredentialOut(BaseModel):
    id: str
    username: str
    password: str
    cookie: str
    expires_at: date

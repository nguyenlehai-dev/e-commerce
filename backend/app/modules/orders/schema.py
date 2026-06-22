from datetime import date, datetime
from typing import Optional

from pydantic import BaseModel, Field

from app.modules.products.schema import CredentialOut


class CheckoutRequest(BaseModel):
    user_id: str = "u-retail"
    product_id: str
    quantity: int = Field(default=1, ge=1, le=50)
    affiliate_code: Optional[str] = None
    coupon_code: Optional[str] = None


class OrderOut(BaseModel):
    id: str
    user_id: str
    product_id: str
    quantity: int
    unit_price: int
    discount: int
    total: int
    final_total: int
    status: str
    purchased_at: datetime
    warranty_until: date
    credentials: list[CredentialOut]


class WarrantyRequest(BaseModel):
    reason: str


class WarrantyTicketOut(BaseModel):
    id: str
    order_id: str
    status: str
    reason: str
    replacement_credential_id: Optional[str] = None


class OrderListOut(BaseModel):
    id: str
    product_id: str
    quantity: int
    status: str
    final_total: int
    warranty_until: date


class OrderDetailOut(OrderOut):
    pass

from typing import Optional

from pydantic import BaseModel


class StartChatRequest(BaseModel):
    user_id: str = "u-retail"
    product_id: str
    message: str


class NegotiatedOfferRequest(BaseModel):
    thread_id: str
    product_id: str
    user_id: str
    negotiated_price: int
    expires_minutes: int = 30


class ChatThreadOut(BaseModel):
    id: str
    user_id: str
    product_id: str
    messages: list[dict]
    offer: Optional[dict] = None

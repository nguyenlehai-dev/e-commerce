from pydantic import BaseModel


class PaymentMethod(BaseModel):
    code: str
    name: str
    enabled: bool

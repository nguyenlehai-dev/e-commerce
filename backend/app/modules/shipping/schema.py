from pydantic import BaseModel


class ShippingRate(BaseModel):
    provider: str
    fee: float
    eta_days: int

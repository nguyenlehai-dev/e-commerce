from .schema import ShippingRate


class ShippingService:
    def estimate(self) -> ShippingRate:
        return ShippingRate(provider="Luna Express", fee=30000, eta_days=2)

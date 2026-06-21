from .service import ShippingService


def get_shipping_service() -> ShippingService:
    return ShippingService()

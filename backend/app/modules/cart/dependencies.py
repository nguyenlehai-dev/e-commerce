from .service import CartService


def get_cart_service() -> CartService:
    return CartService()

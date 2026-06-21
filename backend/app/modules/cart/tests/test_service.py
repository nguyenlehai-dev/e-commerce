from backend.app.modules.cart.service import CartService


def test_get_cart_has_subtotal() -> None:
    assert CartService().get_cart().subtotal > 0

from .schema import CartItem, CartResponse


class CartService:
    def get_cart(self) -> CartResponse:
        items = [CartItem(product_id=1, name="Rose Glow Serum", quantity=1, unit_price=420000)]
        return CartResponse(items=items, subtotal=sum(item.quantity * item.unit_price for item in items))

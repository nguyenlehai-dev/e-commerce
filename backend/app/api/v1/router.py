from fastapi import APIRouter

from ...modules.admin.router import router as admin_router
from ...modules.auth.router import router as auth_router
from ...modules.cart.router import router as cart_router
from ...modules.category.router import router as category_router
from ...modules.coupon.router import router as coupon_router
from ...modules.order.router import router as order_router
from ...modules.payment.router import router as payment_router
from ...modules.product.router import router as product_router
from ...modules.review.router import router as review_router
from ...modules.shipping.router import router as shipping_router
from ...modules.user.router import router as user_router

api_router = APIRouter()
api_router.include_router(auth_router, prefix="/auth", tags=["auth"])
api_router.include_router(user_router, prefix="/users", tags=["users"])
api_router.include_router(category_router, prefix="/categories", tags=["categories"])
api_router.include_router(product_router, prefix="/products", tags=["products"])
api_router.include_router(cart_router, prefix="/cart", tags=["cart"])
api_router.include_router(order_router, prefix="/orders", tags=["orders"])
api_router.include_router(payment_router, prefix="/payments", tags=["payments"])
api_router.include_router(coupon_router, prefix="/coupons", tags=["coupons"])
api_router.include_router(shipping_router, prefix="/shipping", tags=["shipping"])
api_router.include_router(review_router, prefix="/reviews", tags=["reviews"])
api_router.include_router(admin_router, prefix="/admin", tags=["admin"])

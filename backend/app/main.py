from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.modules.admin.router import router as admin_router
from app.modules.auth.router import router as auth_router
from app.modules.chat.router import router as chat_router
from app.modules.coupons.router import router as coupons_router
from app.modules.finance.router import router as finance_router
from app.modules.orders.router import router as orders_router
from app.modules.products.router import router as products_router

app = FastAPI(
    title="AI Account Commerce API",
    version="0.1.0",
    description="Modular API for selling AI accounts with wallet, credentials, and warranty flows.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/api/auth", tags=["Auth"])
app.include_router(products_router, prefix="/api/products", tags=["Products"])
app.include_router(coupons_router, prefix="/api/coupons", tags=["Coupons"])
app.include_router(orders_router, prefix="/api/orders", tags=["Orders"])
app.include_router(finance_router, prefix="/api/finance", tags=["Finance"])
app.include_router(chat_router, prefix="/api/chat", tags=["Chat"])
app.include_router(admin_router, prefix="/api/admin", tags=["Admin"])


@app.get("/health", tags=["System"])
def health_check() -> dict[str, str]:
    return {"status": "ok"}

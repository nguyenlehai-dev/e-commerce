from __future__ import annotations

from datetime import date, timedelta
from threading import Lock
from typing import Any
from uuid import uuid4

inventory_lock = Lock()

users: dict[str, dict[str, Any]] = {
    "u-retail": {
        "id": "u-retail",
        "name": "Khach le demo",
        "email": "retail@example.com",
        "role": "retailer",
        "balance": 1_500_000,
        "commission_balance": 0,
    },
    "u-ctv": {
        "id": "u-ctv",
        "name": "CTV demo",
        "email": "ctv@example.com",
        "role": "collaborator",
        "balance": 2_000_000,
        "commission_balance": 120_000,
    },
    "u-admin": {
        "id": "u-admin",
        "name": "Admin",
        "email": "admin@example.com",
        "role": "admin",
        "balance": 0,
        "commission_balance": 0,
    },
}

products: dict[str, dict[str, Any]] = {
    "chatgpt-plus": {
        "id": "chatgpt-plus",
        "name": "ChatGPT Plus",
        "category": "AI Assistant",
        "description": "Tai khoan ChatGPT Plus dung chung, bao hanh theo goi.",
        "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
        "retail_price": 450_000,
        "wholesale_price": 390_000,
        "collaborator_price": 370_000,
        "cost_price": 210_000,
        "warranty_days": 30,
        "min_wholesale_quantity": 10,
        "variants": [
            {"id": "chatgpt-1m", "label": "1 thang", "multiplier": 1.0},
            {"id": "chatgpt-3m", "label": "3 thang", "multiplier": 2.8},
        ],
    },
    "midjourney-pro": {
        "id": "midjourney-pro",
        "name": "Midjourney Pro",
        "category": "AI Image",
        "description": "Tai khoan tao anh AI, phu hop designer va content team.",
        "image": "https://images.unsplash.com/photo-1686191128892-3b4f1f8aa56d?auto=format&fit=crop&w=1200&q=80",
        "retail_price": 520_000,
        "wholesale_price": 455_000,
        "collaborator_price": 430_000,
        "cost_price": 260_000,
        "warranty_days": 30,
        "min_wholesale_quantity": 8,
        "variants": [
            {"id": "mid-1m", "label": "1 thang", "multiplier": 1.0},
            {"id": "mid-12m", "label": "12 thang", "multiplier": 10.0},
        ],
    },
}

coupons: dict[str, dict[str, Any]] = {
    "WELCOME10": {
        "code": "WELCOME10",
        "type": "percentage",
        "value": 10,
        "allowed_roles": ["retailer"],
        "min_order_value": 300_000,
        "active": True,
        "description": "Giam 10% cho khach le lan dau",
    },
    "WHOLE50": {
        "code": "WHOLE50",
        "type": "fixed",
        "value": 50_000,
        "allowed_roles": ["wholesaler", "collaborator"],
        "min_order_value": 2_000_000,
        "active": True,
        "description": "Giam 50k cho don si/CTV tu 2tr",
    },
}

credentials: list[dict[str, Any]] = [
    {
        "id": "cred-gpt-1",
        "product_id": "chatgpt-plus",
        "username": "chatgpt_user1@example.com",
        "password": "pass123",
        "cookie": "cookie_string_1",
        "status": "available",
        "expires_at": date.today() + timedelta(days=30),
        "order_id": None,
        "user_id": None,
    },
    {
        "id": "cred-gpt-2",
        "product_id": "chatgpt-plus",
        "username": "chatgpt_user2@example.com",
        "password": "pass456",
        "cookie": "cookie_string_2",
        "status": "available",
        "expires_at": date.today() + timedelta(days=30),
        "order_id": None,
        "user_id": None,
    },
    {
        "id": "cred-mid-1",
        "product_id": "midjourney-pro",
        "username": "mid_user1@example.com",
        "password": "midpass123",
        "cookie": "mid_cookie_1",
        "status": "available",
        "expires_at": date.today() + timedelta(days=30),
        "order_id": None,
        "user_id": None,
    },
]

orders: dict[str, dict[str, Any]] = {}
warranty_tickets: dict[str, dict[str, Any]] = {}
ledger: list[dict[str, Any]] = [
    {"id": "seed-income", "type": "income", "amount": 1_500_000, "note": "Seed wallet deposits"},
    {"id": "seed-cost", "type": "expense", "amount": 680_000, "note": "Seed inventory cost"},
]
chat_threads: dict[str, dict[str, Any]] = {}
offers: dict[str, dict[str, Any]] = {}


def make_id(prefix: str) -> str:
    return f"{prefix}-{uuid4().hex[:10]}"

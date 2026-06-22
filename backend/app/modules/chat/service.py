from datetime import datetime, timedelta

from app.shared.store import chat_threads, make_id, offers, products


def start_thread(user_id: str, product_id: str, message: str) -> dict:
    product = products[product_id]
    thread_id = make_id("chat")
    thread = {
        "id": thread_id,
        "user_id": user_id,
        "product_id": product_id,
        "messages": [
            {
                "sender": "system",
                "text": f"Khach hang dang quan tam den san pham {product['name']}",
                "created_at": datetime.utcnow(),
            },
            {"sender": "customer", "text": message, "created_at": datetime.utcnow()},
        ],
        "offer": None,
    }
    chat_threads[thread_id] = thread
    return thread


def create_offer(thread_id: str, product_id: str, user_id: str, negotiated_price: int, expires_minutes: int) -> dict:
    offer = {
        "id": make_id("offer"),
        "thread_id": thread_id,
        "product_id": product_id,
        "user_id": user_id,
        "price": negotiated_price,
        "checkout_url": f"/cart?offer={thread_id}",
        "expires_at": datetime.utcnow() + timedelta(minutes=expires_minutes),
    }
    chat_threads[thread_id]["offer"] = offer
    offers[offer["id"]] = offer
    return offer


def list_threads() -> list[dict]:
    return list(chat_threads.values())

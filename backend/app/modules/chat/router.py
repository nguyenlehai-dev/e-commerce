from fastapi import APIRouter

from app.modules.chat.schema import NegotiatedOfferRequest, StartChatRequest
from app.modules.chat.service import create_offer, list_threads, start_thread

router = APIRouter()


@router.post("/threads")
def start_chat(payload: StartChatRequest) -> dict:
    return start_thread(payload.user_id, payload.product_id, payload.message)


@router.post("/offers")
def negotiated_offer(payload: NegotiatedOfferRequest) -> dict:
    return create_offer(
        payload.thread_id,
        payload.product_id,
        payload.user_id,
        payload.negotiated_price,
        payload.expires_minutes,
    )


@router.get("/threads")
def get_threads() -> list[dict]:
    return list_threads()

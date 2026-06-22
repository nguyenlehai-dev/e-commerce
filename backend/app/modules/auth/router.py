from fastapi import APIRouter, Header

from app.modules.auth.schema import LoginRequest, UserProfile
from app.modules.auth.service import get_demo_user, login

router = APIRouter()


@router.post("/login", response_model=UserProfile)
def login_user(payload: LoginRequest) -> dict:
    return login(payload.email)


@router.get("/me", response_model=UserProfile)
def current_user(x_user_role: str = Header(default="retailer")) -> dict:
    return get_demo_user(x_user_role)

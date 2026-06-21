from fastapi import APIRouter, Depends

from .dependencies import get_auth_service
from .schema import AuthSession, LoginRequest
from .service import AuthService

router = APIRouter()


@router.post("/login", response_model=AuthSession)
def login(payload: LoginRequest, service: AuthService = Depends(get_auth_service)) -> AuthSession:
    return service.login(payload)

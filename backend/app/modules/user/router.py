from fastapi import APIRouter, Depends

from .dependencies import get_user_service
from .schema import UserProfile
from .service import UserService

router = APIRouter()


@router.get("/me", response_model=UserProfile)
def get_me(service: UserService = Depends(get_user_service)) -> UserProfile:
    return service.get_me()

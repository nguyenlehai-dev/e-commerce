from fastapi import APIRouter, Depends

from .dependencies import get_admin_service
from .schema import AdminDashboard
from .service import AdminService

router = APIRouter()


@router.get("/dashboard", response_model=AdminDashboard)
def dashboard(service: AdminService = Depends(get_admin_service)) -> AdminDashboard:
    return service.dashboard()

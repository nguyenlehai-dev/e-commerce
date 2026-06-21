from .service import AdminService


def get_admin_service() -> AdminService:
    return AdminService()

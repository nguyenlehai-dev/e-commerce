from .service import CategoryService


def get_category_service() -> CategoryService:
    return CategoryService()

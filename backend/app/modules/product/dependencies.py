from .service import ProductService


def get_product_service() -> ProductService:
    return ProductService()

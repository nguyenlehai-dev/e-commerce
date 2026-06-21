from .model import ProductModel
from .schema import ProductResponse


def to_product_response(product: ProductModel) -> ProductResponse:
    return ProductResponse(**product.__dict__)

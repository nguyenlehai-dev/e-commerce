from .mapper import to_product_response
from .repository import ProductRepository
from .schema import ProductResponse


class ProductService:
    def __init__(self, repository: ProductRepository | None = None) -> None:
        self.repository = repository or ProductRepository()

    def list_products(self) -> list[ProductResponse]:
        return [to_product_response(product) for product in self.repository.list_products()]

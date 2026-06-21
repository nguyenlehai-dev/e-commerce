from .model import ProductModel


class ProductRepository:
    def list_products(self) -> list[ProductModel]:
        return [
            ProductModel(
                id=1,
                name="Urban Runner Sneakers",
                category="Fashion",
                price=89,
                image="https://images.unsplash.com/photo-1542291026-7eec264c27ff",
                badge="Best seller",
            ),
            ProductModel(
                id=2,
                name="Aurora Smart Watch",
                category="Electronics",
                price=149,
                image="https://images.unsplash.com/photo-1523275335684-37898b6baf30",
                badge="New",
            ),
        ]

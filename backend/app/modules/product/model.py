from dataclasses import dataclass


@dataclass
class ProductModel:
    id: int
    name: str
    category: str
    price: float
    image: str
    badge: str

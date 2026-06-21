from backend.app.modules.product.service import ProductService


def test_list_products_returns_demo_items() -> None:
    products = ProductService().list_products()

    assert products
    assert products[0].name == "Urban Runner Sneakers"

from app.core.rbac import Role
from app.shared.store import credentials, products


def price_for_role(product: dict, role: Role) -> int:
    if role == Role.COLLABORATOR:
        return product["collaborator_price"]
    if role == Role.WHOLESALER:
        return product["wholesale_price"]
    return product["retail_price"]


def list_products(role: Role) -> list[dict]:
    result = []
    for product in products.values():
        stock = sum(
            1
            for credential in credentials
            if credential["product_id"] == product["id"] and credential["status"] == "available"
        )
        result.append({**product, "price": price_for_role(product, role), "stock_available": stock})
    return result


def get_product(product_id: str, role: Role):
    product = products.get(product_id)
    if not product:
        return None
    stock = sum(
        1
        for credential in credentials
        if credential["product_id"] == product_id and credential["status"] == "available"
    )
    return {**product, "price": price_for_role(product, role), "stock_available": stock}

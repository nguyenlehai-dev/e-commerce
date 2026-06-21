def can_manage_products(role: str) -> bool:
    return role in {"admin", "manager"}

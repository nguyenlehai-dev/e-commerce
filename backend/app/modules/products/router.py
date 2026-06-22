from fastapi import APIRouter, Depends, HTTPException

from app.core.rbac import Role, get_current_role
from app.modules.products.schema import ProductOut
from app.modules.products.service import get_product, list_products

router = APIRouter()


@router.get("", response_model=list[ProductOut])
def products(role: Role = Depends(get_current_role)) -> list[dict]:
    return list_products(role)


@router.get("/{product_id}", response_model=ProductOut)
def product_detail(product_id: str, role: Role = Depends(get_current_role)) -> dict:
    product = get_product(product_id, role)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product

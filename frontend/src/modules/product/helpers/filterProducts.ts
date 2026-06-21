import type { Product } from "../types/product";

export function filterProducts(products: Product[], keyword: string) {
  const normalizedKeyword = keyword.trim().toLowerCase();

  if (!normalizedKeyword) {
    return products;
  }

  return products.filter((product) => product.name.toLowerCase().includes(normalizedKeyword));
}

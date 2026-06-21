import type { CartSummary } from "../types/cart";

export async function getCart(): Promise<CartSummary> {
  return {
    items: [{ productId: 1, name: "Rose Glow Serum", quantity: 1, unitPrice: 420000 }],
    subtotal: 420000
  };
}

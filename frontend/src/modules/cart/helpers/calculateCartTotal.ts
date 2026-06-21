import type { CartItem } from "../types/cart";

export function calculateCartTotal(items: CartItem[]) {
  return items.reduce((total, item) => total + item.quantity * item.unitPrice, 0);
}

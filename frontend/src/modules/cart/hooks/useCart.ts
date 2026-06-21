import { useMemo, useState } from "react";
import type { CartItem } from "../types/cart";

export function useCart(initialItems: CartItem[] = []) {
  const [items, setItems] = useState(initialItems);
  const subtotal = useMemo(() => items.reduce((total, item) => total + item.quantity * item.unitPrice, 0), [items]);

  return { items, setItems, subtotal };
}

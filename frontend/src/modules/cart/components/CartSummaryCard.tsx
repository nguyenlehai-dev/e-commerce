import type { CartSummary } from "../types/cart";

type CartSummaryCardProps = {
  cart: CartSummary;
};

export function CartSummaryCard({ cart }: CartSummaryCardProps) {
  return <strong>{cart.items.length} items - {cart.subtotal}</strong>;
}

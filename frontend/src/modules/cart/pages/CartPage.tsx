import { CartSummaryCard } from "../components/CartSummaryCard";
import { initialCartState } from "../store/cartStore";

export function CartPage() {
  return <CartSummaryCard cart={initialCartState} />;
}

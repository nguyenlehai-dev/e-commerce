import type { OrderStatus } from "../types/order";

type OrderStatusBadgeProps = {
  status: OrderStatus;
};

export function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  return <span>{status}</span>;
}

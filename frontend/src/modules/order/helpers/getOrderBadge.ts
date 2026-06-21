import type { OrderStatus } from "../types/order";

export function getOrderBadge(status: OrderStatus) {
  return status === "completed" ? "success" : status === "cancelled" ? "danger" : "warning";
}

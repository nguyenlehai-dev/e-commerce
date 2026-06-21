import type { Order } from "../types/order";

export async function listOrders(): Promise<Order[]> {
  return [{ id: 1, code: "LB-1001", status: "pending", total: 420000 }];
}

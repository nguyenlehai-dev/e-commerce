export type OrderStatus = "pending" | "paid" | "shipping" | "completed" | "cancelled";

export type Order = {
  id: number;
  code: string;
  status: OrderStatus;
  total: number;
};

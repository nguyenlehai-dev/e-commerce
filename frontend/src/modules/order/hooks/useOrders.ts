import { useState } from "react";
import type { Order } from "../types/order";

export function useOrders(defaultOrders: Order[] = []) {
  const [orders, setOrders] = useState(defaultOrders);

  return { orders, setOrders };
}

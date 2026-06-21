import type { PaymentMethod } from "../types/payment";

export async function listPaymentMethods(): Promise<PaymentMethod[]> {
  return [
    { code: "cod", name: "Cash on delivery", enabled: true },
    { code: "bank_transfer", name: "Bank transfer", enabled: true }
  ];
}

import type { PaymentMethod } from "../types/payment";

export function isPaymentEnabled(method: PaymentMethod) {
  return method.enabled;
}

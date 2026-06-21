import type { PaymentMethod } from "../types/payment";

type PaymentMethodOptionProps = {
  method: PaymentMethod;
};

export function PaymentMethodOption({ method }: PaymentMethodOptionProps) {
  return <label>{method.name}<input disabled={!method.enabled} name="payment" type="radio" value={method.code} /></label>;
}

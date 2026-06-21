import { PaymentMethodOption } from "../components/PaymentMethodOption";

export function PaymentPage() {
  return <PaymentMethodOption method={{ code: "cod", enabled: true, name: "Cash on delivery" }} />;
}

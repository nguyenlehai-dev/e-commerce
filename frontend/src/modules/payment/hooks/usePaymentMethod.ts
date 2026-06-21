import { useState } from "react";
import { defaultPaymentMethod } from "../constants/paymentConstants";

export function usePaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState(defaultPaymentMethod);

  return { selectedMethod, setSelectedMethod };
}

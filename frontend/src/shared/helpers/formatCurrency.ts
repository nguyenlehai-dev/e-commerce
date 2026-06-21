export function formatCurrency(amount: number, locale = "vi-VN", currency = "VND") {
  return new Intl.NumberFormat(locale, {
    currency,
    style: "currency"
  }).format(amount);
}

from decimal import Decimal, ROUND_HALF_UP


def format_currency(amount: float, currency: str = "VND") -> str:
    value = Decimal(str(amount)).quantize(Decimal("1"), rounding=ROUND_HALF_UP)
    return f"{value:,.0f} {currency}"

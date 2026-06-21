from .schema import PaymentMethod


class PaymentService:
    def list_methods(self) -> list[PaymentMethod]:
        return [
            PaymentMethod(code="cod", name="Cash on delivery", enabled=True),
            PaymentMethod(code="bank_transfer", name="Bank transfer", enabled=True),
        ]

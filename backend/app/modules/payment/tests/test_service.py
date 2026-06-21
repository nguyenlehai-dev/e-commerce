from backend.app.modules.payment.service import PaymentService


def test_list_methods_has_cod() -> None:
    assert any(method.code == "cod" for method in PaymentService().list_methods())

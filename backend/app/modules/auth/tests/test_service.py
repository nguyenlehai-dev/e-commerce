from backend.app.modules.auth.schema import LoginRequest
from backend.app.modules.auth.service import AuthService


def test_login_returns_demo_token() -> None:
    session = AuthService().login(LoginRequest(email="demo@luna.test", password="secret"))

    assert session.access_token

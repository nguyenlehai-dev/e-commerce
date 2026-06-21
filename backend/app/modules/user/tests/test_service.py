from backend.app.modules.user.service import UserService


def test_get_me_returns_profile() -> None:
    assert UserService().get_me().tier == "gold"

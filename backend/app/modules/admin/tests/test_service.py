from backend.app.modules.admin.service import AdminService


def test_dashboard_returns_metrics() -> None:
    assert AdminService().dashboard().orders_today >= 0

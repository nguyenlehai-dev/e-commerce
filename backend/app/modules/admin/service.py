from .schema import AdminDashboard


class AdminService:
    def dashboard(self) -> AdminDashboard:
        return AdminDashboard(orders_today=12, revenue_today=8400000, low_stock_items=3)

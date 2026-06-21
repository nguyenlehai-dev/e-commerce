from pydantic import BaseModel


class AdminDashboard(BaseModel):
    orders_today: int
    revenue_today: float
    low_stock_items: int

from pydantic import BaseModel


class WalletTopupRequest(BaseModel):
    user_id: str
    amount: int
    provider: str = "bank_qr"


class FinanceSummary(BaseModel):
    revenue: int
    expense: int
    net_profit: int
    wallet_liability: int


class LedgerEntryOut(BaseModel):
    id: str
    type: str
    amount: int
    note: str

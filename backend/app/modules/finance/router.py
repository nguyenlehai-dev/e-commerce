from fastapi import APIRouter

from app.modules.finance.schema import FinanceSummary, LedgerEntryOut, WalletTopupRequest
from app.modules.finance.service import finance_summary, topup_wallet
from app.shared.store import ledger

router = APIRouter()


@router.post("/wallet/topup")
def topup(payload: WalletTopupRequest) -> dict:
    return topup_wallet(payload.user_id, payload.amount, payload.provider)


@router.get("/summary", response_model=FinanceSummary)
def summary() -> dict:
    return finance_summary()


@router.get("/ledger", response_model=list[LedgerEntryOut])
def get_ledger() -> list[dict]:
    return ledger

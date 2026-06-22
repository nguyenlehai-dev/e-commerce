from fastapi import HTTPException

from app.shared.store import ledger, make_id, users


def topup_wallet(user_id: str, amount: int, provider: str) -> dict:
    user = users.get(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user["balance"] += amount
    entry = {"id": make_id("ledger"), "type": "income", "amount": amount, "note": f"Topup via {provider}"}
    ledger.append(entry)
    return {"user_id": user_id, "balance": user["balance"], "ledger_entry": entry}


def finance_summary() -> dict:
    revenue = sum(item["amount"] for item in ledger if item["type"] == "income")
    expense = sum(item["amount"] for item in ledger if item["type"] == "expense")
    wallet_liability = sum(user["balance"] for user in users.values())
    return {
        "revenue": revenue,
        "expense": expense,
        "net_profit": revenue - expense,
        "wallet_liability": wallet_liability,
    }

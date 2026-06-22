# AI Account Commerce

Modular ecommerce for AI accounts with role-based pricing, digital inventory, wallet checkout, warranty, finance, coupons, and negotiation chat.

## Stack

- `frontend/`: React + TypeScript
- `backend/`: FastAPI
- `docs/`: business flow and backlog notes

## What is included

- Retail, wholesale, collaborator, and admin roles
- Credential pool inventory per product
- Auto-delivery checkout with stock locking
- Coupon validation by role and minimum order value
- Wallet topup and finance ledger
- Warranty ticket and replacement flow
- Negotiated chat offer flow
- Admin dashboard metrics

## Run

Backend:

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --host 127.0.0.1 --port 8000
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

## URLs

- Frontend: `http://127.0.0.1:5173`
- Backend health: `http://127.0.0.1:8000/health`
- Swagger: `http://127.0.0.1:8000/docs`

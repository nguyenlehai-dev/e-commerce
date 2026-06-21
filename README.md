# E-commerce Store Platform

Monorepo mau cho san thuong mai dien tu gom ReactJS frontend, Python FastAPI backend, docs, CI/CD va Scrum artifacts.

## Run frontend

```bash
cd frontend
npm install
npm run dev
```

## Run backend

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt
uvicorn backend.app.main:app --reload
```

## Structure

- `frontend/`: ReactJS ecommerce UI theo modules.
- `backend/`: FastAPI API skeleton theo modules.
- `docs/`: tai lieu tong quan du an.
- `scrum/`: backlog, sprint va user stories.
- `cicd/`: workflow, Dockerfile va nginx config.

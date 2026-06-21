# CI/CD Guide

Pipeline chạy trên GitHub Actions theo git-flow: `feature/* → develop → staging → main`.

## Workflows (`.github/workflows/`)

| File | Trigger | Mục đích |
| --- | --- | --- |
| `ci.yml` | PR + push vào develop/staging/main | Orchestrator: chạy frontend + backend + docker theo thay đổi |
| `frontend-ci.yml` | Đổi `frontend/**` | install → tsc check → build → upload dist artifact |
| `backend-ci.yml` | Đổi `backend/**` | install → compile-check + smoke import → pytest |
| `docker-build.yml` | Push vào develop/staging/main + tag `v*.*.*` | Build + push image lên GHCR (ghcr.io/&lt;owner&gt;/e-commerce/{frontend,backend}) |
| `deploy-dev.yml` | Push vào `develop` | Pull image + `docker compose up -d` lên môi trường Dev |
| `deploy-staging.yml` | Push vào `staging` | Pull image + `docker compose up -d` lên Staging |
| `deploy-production.yml` | Tag `v*.*.*` hoặc manual dispatch | Pull image + `docker compose up -d` lên Production |

## Pipeline flow

```
PR opened/updated
       │
       ▼
   ci.yml  ──► frontend-ci (nếu đổi frontend/**)
       │   └──► backend-ci  (nếu đổi backend/**)
       │   └──► docker-build (chỉ khi push, không phải PR)
       ▼
merge vào develop ──► deploy-dev (auto)
       │
       ▼
merge vào staging ──► deploy-staging (auto)
       │
       ▼
tag v*.*.* trên main ──► deploy-production (auto)
```

## Môi trường (GitHub Environments)

| Env | URL mẫu | Secret cần set |
| --- | --- | --- |
| `dev` | `https://dev.ecommerce.example.com` | `SLACK_WEBHOOK` (optional) |
| `staging` | `https://staging.ecommerce.example.com` | `SLACK_WEBHOOK` |
| `production` | `https://ecommerce.example.com` | `SLACK_WEBHOOK` |

> GHCR login dùng `GITHUB_TOKEN` mặc định — không cần PAT riêng. Tạo GitHub Environment `dev/staging/production` trong repo Settings → Environments để yêu cầu approval cho production.

## Docker images

- **Registry**: `ghcr.io/<owner>/e-commerce/frontend` và `ghcr.io/<owner>/e-commerce/backend`
- **Tag scheme**:
  - `latest` cho default branch (main)
  - `<branch>` cho develop/staging
  - `<semver>` cho tag release (vd `1.4.0`)
  - `sha-<7>` cho mỗi build (debug)
- **Cache**: GitHub Actions cache (`type=gha`) để build nhanh giữa các lần chạy

## Required Secrets

| Secret | Mô tả |
| --- | --- |
| `SLACK_WEBHOOK` | (Optional) webhook Slack để thông báo deploy |
| `GITHUB_TOKEN` | Tự động cung cấp bởi GitHub Actions — đủ quyền push lên GHCR |

## Local debugging

Chạy thử workflow trên máy với [act](https://github.com/nektos/act):

```bash
brew install act
act -j frontend-image -W .github/workflows/docker-build.yml
```

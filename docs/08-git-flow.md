# Git Flow

## Branch model

```
feature/* ──► develop ──► staging ──► main
                  │            │          │
                  ▼            ▼          ▼
              Deploy Dev   Deploy Staging  Deploy Prod
```

| Branch | Mục đích | Bảo vệ | Deploy |
| --- | --- | --- | --- |
| `feature/*` | Tính năng / fix / refactor đang làm | — | — |
| `develop` | Tích hợp feature, chạy CI/CD mỗi push | Branch protection: cần PR + 1 review | Auto deploy Dev |
| `staging` | Chuẩn bị release, smoke test thủ công | Branch protection: cần PR + 1 review từ maintainer | Auto deploy Staging |
| `main` | Production | Branch protection: cần 2 review + tag | Auto deploy Prod (chỉ từ tag) |

## Quy tắc

1. **Branch name**: `feature/<ticket>-<slug>` (ví dụ `feature/ECOM-12-product-filter`).
2. **Commit message**: Conventional Commits — `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`.
3. **PR target**: feature → develop, develop → staging, staging → main.
4. **Merge commit** được phép; **squash** khuyến nghị cho feature PR.
5. **Tag** cho production: `vMAJOR.MINOR.PATCH` (semver) — trigger deploy production.
6. **Hotfix** từ `main` tạo `hotfix/<slug>`, merge vào cả `main` lẫn `develop`.

## Khởi tạo lần đầu

```bash
git init -b main
git checkout -b develop
git push -u origin main
git push -u origin develop
```

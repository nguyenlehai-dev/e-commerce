from fastapi import HTTPException, status

from app.shared.store import users


def login(email: str) -> dict:
    for user in users.values():
        if user["email"] == email:
            return user
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")


def get_demo_user(role: str) -> dict:
    for user in users.values():
        if user["role"] == role:
            return user
    return users["u-retail"]

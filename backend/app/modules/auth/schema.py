from pydantic import BaseModel


class LoginRequest(BaseModel):
    email: str
    password: str


class AuthSession(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user_id: int

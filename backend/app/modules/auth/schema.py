from pydantic import BaseModel


class LoginRequest(BaseModel):
    email: str
    password: str


class UserProfile(BaseModel):
    id: str
    name: str
    email: str
    role: str
    balance: int
    commission_balance: int

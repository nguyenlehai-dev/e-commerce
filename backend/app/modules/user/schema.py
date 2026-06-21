from pydantic import BaseModel


class UserProfile(BaseModel):
    id: int
    full_name: str
    email: str
    tier: str

from .schema import AuthSession, LoginRequest


class AuthService:
    def login(self, payload: LoginRequest) -> AuthSession:
        return AuthSession(access_token="demo-token", user_id=1)

from .schema import UserProfile


class UserService:
    def get_me(self) -> UserProfile:
        return UserProfile(id=1, full_name="Thanh Huyen", email="huyen@luna.test", tier="gold")

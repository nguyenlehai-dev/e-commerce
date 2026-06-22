from enum import Enum

from fastapi import Header, HTTPException, status


class Role(str, Enum):
    ADMIN = "admin"
    COLLABORATOR = "collaborator"
    WHOLESALER = "wholesaler"
    RETAILER = "retailer"


def get_current_role(x_user_role: Role = Header(default=Role.RETAILER)) -> Role:
    return x_user_role


def require_roles(allowed_roles: set[Role]):
    def dependency(role: Role = Header(default=Role.RETAILER, alias="x-user-role")) -> Role:
        if role not in allowed_roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You do not have permission to access this resource.",
            )
        return role

    return dependency

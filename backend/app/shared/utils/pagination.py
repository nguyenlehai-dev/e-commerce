from pydantic import BaseModel


class Pagination(BaseModel):
    page: int = 1
    page_size: int = 12

    @property
    def offset(self) -> int:
        return (self.page - 1) * self.page_size

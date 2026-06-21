from .schema import CategoryResponse


class CategoryService:
    def list_categories(self) -> list[CategoryResponse]:
        return [
            CategoryResponse(id=1, name="Skincare", slug="skincare"),
            CategoryResponse(id=2, name="Makeup", slug="makeup"),
            CategoryResponse(id=3, name="Fragrance", slug="fragrance"),
        ]

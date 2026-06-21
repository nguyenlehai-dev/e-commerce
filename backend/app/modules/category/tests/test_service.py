from backend.app.modules.category.service import CategoryService


def test_list_categories_returns_items() -> None:
    assert CategoryService().list_categories()

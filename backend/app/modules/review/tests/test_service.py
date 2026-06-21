from backend.app.modules.review.service import ReviewService


def test_list_reviews_returns_rating() -> None:
    assert ReviewService().list_reviews()[0].rating == 5

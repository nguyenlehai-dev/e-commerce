def is_valid_email(value: str) -> bool:
    return "@" in value and "." in value.rsplit("@", 1)[-1]

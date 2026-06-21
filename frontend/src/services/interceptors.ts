export function withJsonHeaders(init: RequestInit = {}): RequestInit {
  return {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init.headers
    }
  };
}

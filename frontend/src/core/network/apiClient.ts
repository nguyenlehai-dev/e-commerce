const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export type Role = "retailer" | "wholesaler" | "collaborator" | "admin";

export async function apiGet<T>(path: string, role: Role): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { "x-user-role": role },
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

export async function apiPost<T>(path: string, role: Role, body: unknown): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-user-role": role,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(await response.text());
  return response.json();
}

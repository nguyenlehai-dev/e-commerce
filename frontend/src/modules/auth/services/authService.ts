import type { AuthSession, LoginPayload } from "../types/auth";

export async function login(payload: LoginPayload): Promise<AuthSession> {
  return {
    accessToken: `demo-token-${payload.email}`,
    userId: 1
  };
}

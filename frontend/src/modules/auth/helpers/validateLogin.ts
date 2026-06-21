import type { LoginPayload } from "../types/auth";

export function validateLogin(payload: LoginPayload) {
  return payload.email.includes("@") && payload.password.length >= 6;
}

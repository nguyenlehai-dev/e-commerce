import { useState } from "react";
import { login } from "../services/authService";
import type { AuthSession, LoginPayload } from "../types/auth";

export function useLogin() {
  const [session, setSession] = useState<AuthSession | null>(null);

  async function submit(payload: LoginPayload) {
    const nextSession = await login(payload);
    setSession(nextSession);
    return nextSession;
  }

  return { session, submit };
}

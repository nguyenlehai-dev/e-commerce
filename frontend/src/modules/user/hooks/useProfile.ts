import { useState } from "react";
import type { UserProfile } from "../types/user";

export function useProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  return { profile, setProfile };
}

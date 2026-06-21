import type { UserProfile } from "../types/user";

export async function getProfile(): Promise<UserProfile> {
  return { id: 1, fullName: "Thanh Huyen", email: "huyen@luna.test", tier: "gold" };
}

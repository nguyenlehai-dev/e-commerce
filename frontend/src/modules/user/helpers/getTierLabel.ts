import type { UserProfile } from "../types/user";

export function getTierLabel(tier: UserProfile["tier"]) {
  return tier.toUpperCase();
}

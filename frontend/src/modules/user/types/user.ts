export type UserProfile = {
  id: number;
  fullName: string;
  email: string;
  tier: "standard" | "gold" | "vip";
};

import { ProfileCard } from "../components/ProfileCard";

export function AccountPage() {
  return <ProfileCard profile={{ email: "huyen@luna.test", fullName: "Thanh Huyen", id: 1, tier: "gold" }} />;
}

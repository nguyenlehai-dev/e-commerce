import type { UserProfile } from "../types/user";

type ProfileCardProps = {
  profile: UserProfile;
};

export function ProfileCard({ profile }: ProfileCardProps) {
  return <article><h2>{profile.fullName}</h2><p>{profile.email}</p></article>;
}

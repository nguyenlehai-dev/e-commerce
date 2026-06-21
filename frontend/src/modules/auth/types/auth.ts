export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthSession = {
  accessToken: string;
  userId: number;
};

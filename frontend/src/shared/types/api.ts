export type ApiStatus = "idle" | "loading" | "success" | "error";

export type ApiResult<T> = {
  data: T;
  status: ApiStatus;
  message?: string;
};

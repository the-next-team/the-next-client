import { ApiError } from "./apiError";

export interface ApiResponse<T> {
  status: string;
  data: T;
  error: ApiError;
}

import { ApiError } from "./apiResponse";

export interface ApiResponse<T> {
  status: string;
  data: T;
  error: ApiError;
}

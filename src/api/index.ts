import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { storageKey } from "../constants";
import Logger from "../utils/logger";
import { ApiResponse } from "./models/common/apiError";

const httpInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  timeout: 60000,
});

// http method
export const Get = async <T>(
  url: string,
  config?: AxiosRequestConfig<any>
): Promise<ApiResponse<T>> => {
  const response = await httpInstance.get<ApiResponse<T>>(url, config);
  return response.data;
};

export const Post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any>
): Promise<ApiResponse<T>> => {
  const response = await httpInstance.post<ApiResponse<T>>(url, data, config);
  return response.data;
};

export const Put = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig<any>
): Promise<ApiResponse<T>> => {
  const response = await httpInstance.put<ApiResponse<T>>(url, data, config);
  return response.data;
};

export const Delete = async <T>(
  url: string,
  config?: AxiosRequestConfig<any>
): Promise<ApiResponse<T>> => {
  const response = await httpInstance.delete<ApiResponse<T>>(url, config);
  return response.data;
};

// Interceptor
const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  Logger.debug("interceptors request", config.url);
  const accessToken = localStorage.getItem(storageKey.accessToken);
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  Logger.debug("interceptors response.data", response.data);

  if (response.headers["access-token"]) {
    localStorage.setItem(storageKey.accessToken, response.headers["access-token"]);
  }
  if (response.headers["refresh-token"]) {
    localStorage.setItem(storageKey.refreshToken, response.headers["refresh-token"]);
  }
  return response;
};

const onResponseError = async (
  error: AxiosError | Error
): Promise<AxiosError> => {
  if (error instanceof AxiosError) {
    const originalConfig = error.config as InternalAxiosRequestConfig;

    if (error.response?.status === 403) {
      try {
        const response = await axios({
          url: `${process.env.REACT_APP_API_URL}/api/auth/token/reissue`,
          method: "post",
          headers: {
            "Content-Type": `application/json`,
          },
          data: {
            refreshToken: localStorage.getItem(storageKey.refreshToken),
          },
        });

        const accessToken = response.headers["access-token"];
        localStorage.setItem(storageKey.accessToken, accessToken);

        originalConfig.headers["Authorization"] = `Bearer ${accessToken}`;

        return httpInstance(originalConfig);
      } catch (error: any) {
        return Promise.reject(error.response?.data);
      }
    }
    return Promise.reject(
      error.response?.data ?? {
        status: "Failure",
        error: {
          status: 9999,
          code: "",
          message: "일시적으로 문제가 발생했어요\n다시 시도해주세요",
        },
      }
    );
  }

  return Promise.reject(error);
};

// request
httpInstance.interceptors.request.use(onRequest);

// response
httpInstance.interceptors.response.use(onResponse, onResponseError);

export default httpInstance;

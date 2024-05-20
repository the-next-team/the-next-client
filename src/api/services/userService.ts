import { Get, Post } from "..";
import { ApiResponse } from "../models/common/apiError";

export interface IUser {
  id: string;
  username: string;
  employeeNumber: string;
  loginIp: string;
}

export interface ILoginHistory {
  id: number;
  userId: string;
  successYn: string;
  type: string;
  ip: string;
  hostname: string;
  description: string | null;
  createdDate: string;
}

export interface IInfoHistory {}

export interface IUserLoggedIn {
  id: string;
  username: string;
  employeeNumber: string | null;
  loginIp: string;
}

export const UserService = {
  login: async (data: object): Promise<ApiResponse<any>> => {
    return Post("/api/auth/login", data);
  },
  getUser: async (): Promise<ApiResponse<IUser[]>> => {
    return Get(`/api/user`);
  },
  fetchUserLoginHistory: async (): Promise<ApiResponse<ILoginHistory[]>> => {
    return Get(`/api/user/history/login`);
  },
  fetchUserInfoHistory: async (): Promise<ApiResponse<IInfoHistory[]>> => {
    return Get(`/api/user/history/info`);
  },
  fetchUserLoggedIn: async (): Promise<ApiResponse<IUserLoggedIn[]>> => {
    return Get(`/api/user/me`);
  },
};

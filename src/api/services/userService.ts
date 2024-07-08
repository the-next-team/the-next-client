import { Get, Post } from "..";
import { UserState } from "../../states/user/userAtom";
import { ApiResponse } from "../models/common/apiResponse";

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

export interface IUserInfo {
  id: string;
  username: string;
  employeeNumber: string | null;
  loginIp: string;
}

export const UserService = {
  login: async (data: object): Promise<ApiResponse<any>> => {
    return Post("/api/auth/login", data);
  },
  // 사용자 정보 조회
  fetchInfo: async (): Promise<ApiResponse<UserState>> => {
    return Get("/api/user/me");
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
  fetchUserLoggedIn: async (): Promise<ApiResponse<IUserInfo>> => {
    return Get(`/api/user/me`);
  },
};

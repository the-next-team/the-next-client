import { Get } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export interface IUserName {
  userNm: string; // 사용자명
  sabNm: string; // 상태
  brNm: string; // 부점
}

export const userNameService = {
  getUserName: async (): Promise<ApiResponse<IUserName[]>> => {
    return Get(
      `/api/common/user-management?userName&userId&sabCd&sacCd&brCode&depCode&loginState`
    );
  },
};

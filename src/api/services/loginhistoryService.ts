import { Get } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export interface ILoginhistory {
  logoutDtm: string;
  note: number;
  crtDtm: string;
  loginIp: string;
  succYn: string;
  logSeq: number;
  logTy: string;
  userId: string;
  hostNm: string;
}

export const LoginhistoryService = {
  getLoginhistory: async (): Promise<ApiResponse<ILoginhistory[]>> => {
    return Get(
      `/api/common/log/login/history/inquriy?loginFromDt&loginToDt&userId&loginIp&succYn`
    );
  },
};

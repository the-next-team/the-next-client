import { Get } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export interface IFsb {
  brNm: string;
  fsbTermIp: number;
  chgDtm: string;
  oldBrCode: string;
  loginDtm: number;
  fsbCd: string;
  pwChgDtm: number;
  fsbNm: string;
  crtId: string;
  loginMsg: number;
  fsbBrchcd: number;
  fsbEmpNo: string;
  fsbTermNo: number;
  fsbEmpNm: number;
  pwExprDtm: number;
  fsbTeamCode: number;
  loginErrCnt: number;
  crtDtm: string;
  oldFsbCd: string;
  fsbUserPw: number;
  brCode: string;
  chgId: string;
}

export const FsbService = {
  getFsb: async (): Promise<ApiResponse<IFsb[]>> => {
    return Get(`/api/common/user-management/ifis-number?fsbEmpNo&brCode&fsbCd`);
  },
};

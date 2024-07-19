import { Get } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export interface IFsb {
  fsbEmpNm: string; // 이기종사번
  fsbNm: string; // 이기종사용자명
  brNm: string; // 부서
  fsbCd: string; //이기종 지점코드
  loginErrCnt: number; // 비밀번호 오류횟수
}

export const FsbService = {
  getFsb: async (): Promise<ApiResponse<IFsb[]>> => {
    return Get(`/api/common/user-management/ifis-number?fsbEmpNo&brCode&fsbCd`);
  },
};

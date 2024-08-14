import { Get } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export interface IDepartment {
  brNm: string; // 부점명
  viewSeq: string; // 보기순서
  brCode: string; // 부점코드
  brTelno: string; // 대표번호
  brFaxno: string; // 팩스번호
  crtDtm: string; // 등록일시
}

export const departmentService = {
  getDepartments: async (): Promise<ApiResponse<IDepartment[]>> => {
    return Get(`/api/common/user-management/department`);
  },
};

import { Get } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export interface ITeam {
  depCode: string; // 팀(파트)코드
  depNm: string; // 팀(파트)명
  depTelno: string; // 대표번호
  brNm: string; //부점명
  brCode: string; // 부점코드
  depFaxno: string; // 팩스번호
  depWebFaxno: string; //WEB팩스번호
  useYn: string; // 사용여부
  viewSeq: number; // 보기순서
}

export const TeamService = {
  getTeam: async (): Promise<ApiResponse<ITeam[]>> => {
    return Get(`/api/common/user-management/team`);
  },
};

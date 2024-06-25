import { Get } from "..";
import { ApiResponse } from "../models/common/apiError";

export interface ITeam {
  code: string; // 팀(파트)코드
  name: string; // 팀(파트)명
  telephoneNumber: string; // 대표번호
  branchCode: string; // 지점코드
  faxNumber: string; // 팩스번호
  webFaxNumber: string; //WEB팩스번호
  useYn: string; // 사용여부
  priority: number; // 보기순서
}

export const TeamService = {
  getTeam: async (): Promise<ApiResponse<ITeam[]>> => {
    return Get(`/api/common/team`);
  },
};

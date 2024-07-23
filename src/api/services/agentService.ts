import { Get } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export interface IAgent {
  agentId: string; // 중개사ID
  agentNm: string; // 중개사명
  acno: string; // 계좌번호
  crtDtm: string; // 등록일시
  chgDtm: string; // 변경일시
  replyUrl: string; // 응답URL
}

export const AgentService = {
  getAgents: async (): Promise<ApiResponse<IAgent[]>> => {
    return Get(`/api/common/agent/inquiry?agentNm&brCode&useYn`);
  },
};

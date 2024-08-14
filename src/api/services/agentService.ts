import { Get } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export interface IAgent {
  brNm: string;
  replyUrl: number;
  agentId: string;
  chgDtm: string;
  comChprNm: number;
  crtId: string;
  agentHkYn: string;
  serverPort: number;
  closeDt: number;
  agentNote: number;
  acno: string;
  crtDtm: string;
  comChprTelno: string;
  test: number;
  agentNm: string;
  adNo: string;
  invtId: number;
  fepChanId: number;
  permisPort: number;
  saleChprNm: number;
  adNm: string;
  permisIp: number;
  vpnUseYn: string;
  serverIp: number;
  saleChprTelno: string;
  brCode: string;
  agentSnm: string;
  expnTrgYn: string;
  chgId: string;
}

export const AgentService = {
  getAgents: async (): Promise<ApiResponse<IAgent[]>> => {
    return Get(`/api/common/agent/inquiry?agentNm&brCode&useYn`);
  },
};

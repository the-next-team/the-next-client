import { Get } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export interface ILp {
  useIpAddr: number;
  agentId: string;
  reqLmtCnt: number;
  chgDtm: string;
  lpCloseDt: number;
  lpTreeCd: string;
  lpcCd: string;
  crtId: string;
  lpNote: string;
  lpId: string;
  lpNm: string;
  loginErrCnt: number;
  crtDtm: string;
  loginIp: number;
  lpcNm: string;
  useYn: string;
  smsRcvYn: string;
  lpRegNo: number;
  loginDtm: number;
  agentNm: string;
  lpTreeStructure: number;
  lpIssuDt: number;
  lpTelno: number;
  lpaCd: number;
  lpResidNo: number;
  chgId: string;
}

export const LpService = {
  getLp: async (): Promise<ApiResponse<ILp[]>> => {
    return Get(
      `/api/common/agent/lp/inquiry?agentId=&useYn=&lpTreeCd=&lpId&lpNm`
    );
  },
};

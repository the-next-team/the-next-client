import { Get } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export interface IBatch {
  PRG_NM: string;
  PROC_CYCL_DATA: string;
  USE_YN: string;
  PRG_DESC: string;
  VIEW_SEQ: number;
  PROC_CYCL: string;
  CRT_ID: string;
  PRG_ID: string;
  BF_PRG_ID: string;
}

export interface IBatchHistory {
  PRG_NM: string;
  PROC_CYCL_DATA: string;
  USE_YN: string;
  PRG_DESC: string;
  VIEW_SEQ: number;
  PROC_CYCL: string;
  CRT_ID: string;
  PRG_ID: string;
  BF_PRG_ID: string;
}

export const batchService = {
  fetchBatchInquiry: async (params: {
    procCycl: string;
    prgNm: string;
    useYn: string;
  }): Promise<ApiResponse<IBatch[]>> => {
    return Get(`/api/common/batch/inquiry`, {
      params: params,
    });
  },
  fetchBatchInquiryHistory: async (params: {
    procSt: string;
    runDt: string;
  }): Promise<ApiResponse<IBatchHistory[]>> => {
    return Get(`/api/common/batch/history/inquiry`, {
      params: params,
    });
  },
};

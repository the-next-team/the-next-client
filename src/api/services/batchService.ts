import { Get } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export interface ICode {
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
  getCode: async (params?: any): Promise<ApiResponse<ICode[]>> => {
    return Get(`/api/common/batch/inquiry`, {
      params: params,
    });
  },
};

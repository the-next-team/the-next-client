import { Get } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export interface IMenu {
  code?: string;
  name: string;
  priority: number;
  description?: string;
  programId?: string;
  url?: string;
  items: IMenu[];
}

export const ProgramService = {
  fetchProgramMenuInquiry: async (params: {
    menuCd: string;
    sysCd: string;
    grpSeq: string;
    prgId: string;
    prgNm: string;
    prgTy: string;
    useYn: string;
  }): Promise<ApiResponse<IMenu[]>> => {
    return Get(`/api/common/menu/program/inquiry`, {
      params: params,
    });
  },
};

import { Get } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export interface IPrint {
  prtDtm: string;
  prtId: string;
  seqNo: number;
  prtUserNm: string;
  brCode: string;
  prtNm: string;
}

export const PrintService = {
  getPrint: async (): Promise<ApiResponse<IPrint[]>> => {
    return Get(
      `/api/common/log/print/history/inquriy?prtFromDt&prtToDt&prtId&brCode&prtUserNm`
    );
  },
};

import { Get } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export interface IBusinessData {
  DATE: string;
  DESCRIPTION: string;
  YEAR_WEEK: number;
  BIZ_YN: string;
  MONTH_WEEK: number;
}

export const BusinessDataService = {
  getBusinessData: async (): Promise<ApiResponse<IBusinessData[]>> => {
    return Get(
      `/api/common/business-date/input-values?fromDate=20240101&toDate=20240506`
    );
  },
};

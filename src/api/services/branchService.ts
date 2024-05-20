import { Get } from "..";
import { ApiResponse } from "../models/common/apiError";

export interface IBranchCode {
  code: string;
  name: string;
  shortName: string | null;
  priority: number;
  address: string;
  addressDetail: string;
  postcode: string;
  telephoneNumber: string;
  faxNumber: string;
}

export const BranchService = {
  fetchRejectCode: async (): Promise<ApiResponse<IBranchCode[]>> => {
    return Get(`/api/common/branch/code`);
  },
};

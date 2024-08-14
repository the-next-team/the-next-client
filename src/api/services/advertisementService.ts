import { Get } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export interface IAdvertisement {
  chgDtm: string;
  adcCd: number;
  adbCd: number;
  crtId: string;
  adNo: string;
  adSnm: string;
  invtId: string;
  adNm: string;
  crtDtm: string;
  adaNm: string;
  adNote: number;
  adaCd: string;
  useYn: string;
  adcNm: string;
  adbNm: string;
  chgId: string;
}

export const AdvertisementService = {
  getAdvertisements: async (): Promise<ApiResponse<IAdvertisement[]>> => {
    return Get(`/api/common/advertisement/inquiry?adbCd&adaCd&adcCd&useYn`);
  },
};

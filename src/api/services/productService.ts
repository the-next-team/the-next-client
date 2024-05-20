import { Get } from "..";
import { ApiResponse } from "../models/common/apiError";

export interface IProduct {
  code: string;
  name: string;
  kind: string;
}

export const ProductService = {
  fetchGoods: async (): Promise<ApiResponse<IProduct[]>> => {
    return Get(`/api/common/goods`);
  },
};

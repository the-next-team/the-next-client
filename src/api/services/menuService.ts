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

export interface IMenu1Depth {
  code: string;
  name: string;
  priority: number;
  description: string | null;
  items: Array<IMenu2Depth>;
}

export interface IMenu2Depth {
  name: string;
  priority: number;
  description: string | null;
  items: Array<IMenu3Depth>;
}

export interface IMenu3Depth {
  id: number;
  name: string;
  programId: string;
  url: string;
  priority: number;
}

export const MenuService = {
  findAll: async (): Promise<ApiResponse<IMenu[]>> => {
    return Get("/api/common/menu");
  },
  getMenu: async (): Promise<ApiResponse<IMenu1Depth[]>> => {
    return Get("/api/common/menu");
  },
  getMenuByCode: async (code: string): Promise<ApiResponse<IMenu2Depth[]>> => {
    return Get(`/api/common/menu/${code}`);
  },
};

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

export interface ITopMenu {
  note: string;
  menuCd: string;
  crtDtm: string;
  viewSeq: number;
  crtId: string;
  useYn: string;
  menuNm: string;
}

export interface IMiddleMenu {
  note: string;
  sysNm: string;
  sysCd: string;
  crtDtm: string;
  viewSeq: number;
  crtId: string;
  useYn: string;
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
  fetchTopMenuInquiry: async (): Promise<ApiResponse<ITopMenu[]>> => {
    return Get(`/api/common/menu/top/inquiry`);
  },
  fetchMiddleMenuInquiry: async (params: {
    menuCd: string;
  }): Promise<ApiResponse<IMiddleMenu[]>> => {
    return Get(`/api/common/menu/middle/inquiry`, {
      params: params,
    });
  },
};

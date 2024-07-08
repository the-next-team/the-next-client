import { Get, Post } from "..";
import { ApiResponse } from "../models/common/apiResponse";

export const CodeType = {};

export interface ICode {
  kind: string;
  name: string;
  description: string | null;
  useYn: string; //사용여부 추가
  createdDate: string; //생성일자
  updatedDate: string; //수정일자
}

export interface IJobCode {
  code: string;
  jobCode: string;
  jobName: string;
  jobLevel1: string;
  jobLevel2: string;
  jobLevel3: string;
  jobLevel4: string;
  acctJobCode: string;
  taxCode: string;
  taxRate: string;
  grupGrd1: number;
  grupGrd2: number;
  egLoanJobCode: string;
  depth: number;
  lastYn: string;
  createdDate: string;
}

export interface ICodeItem {
  code: string;
  name: string;
  description: string | null;
  useYn: string; //사용여부 추가
  priority: 1; //보기순서
  createdDate: string; //생성일자
  updatedDate: string; //수정일자
}

export interface ICodeInputValues {
  kind: string;
  name: string;
  useYn: boolean; //사용여부 추가
  mainYn: boolean;
}

export const CodeService = {
  getCode: async (): Promise<ApiResponse<ICode[]>> => {
    return Get(`/api/common/code`);
  },
  getJobCode: async (): Promise<ApiResponse<IJobCode[]>> => {
    return Get(`/api/common/code/job`);
  },
  getCodeByKind: async (kind: string): Promise<ApiResponse<ICodeItem[]>> => {
    return Get(`/api/common/code/${kind}`);
  },
  getCodeByValues: async (
    data: ICodeInputValues
  ): Promise<ApiResponse<ICode[]>> => {
    return Post(`/api/common/code/input-values`, data);
  },
};

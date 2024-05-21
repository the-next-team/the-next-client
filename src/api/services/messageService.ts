import { Get } from "..";
import { ApiResponse } from "../models/common/apiError";

export interface IMessageModel {
  id: number;
  code: string;
  name: string;
  requestId: string;
  requestAt: string;
  responseAt: string;
  status: string;
  createdUserId: string;
  caller: string;
  inqMode: string;
}

export const MessageService = {
  getMessages: async (): Promise<ApiResponse<IMessageModel[]>> => {
    return Get("/api/common/message/history/list");
  },
};

import { Post } from "../..";

export const NotificationService = {
  send: async (): Promise<any> => {
    return Post("/api/notification/send");
  },
};

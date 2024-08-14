import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type NotificationType = {
  id: string;
  title: string;
  body: string;
  icon?: string;
};

const useLocalNotification = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const showNotification = (notification: Omit<NotificationType, "id">) => {
    const newNotification = { ...notification, id: uuidv4() };
    setNotifications((prev) => [...prev, newNotification]);

    // 일정 시간 후에 알림을 제거
    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((n) => n.id !== newNotification.id)
      );
    }, 3000); // 5초 후 제거
  };

  return {
    notifications,
    showNotification,
  };
};

export default useLocalNotification;

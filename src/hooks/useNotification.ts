
type ShowNotificationType = {
  title: string;
  body: string;
  icon?: string;
};

const useNotification = () => {
  const show = (notification: ShowNotificationType) => {
    if (window.electron?.ipcRenderer) {
      window.electron?.ipcRenderer.sendMessage("show-notification", {
        title: notification.title,
        body: notification.body,
      });
    } else {
      if (Notification.permission === "granted") {
        new Notification(notification.title, {
          body: notification.body,
          icon: notification.icon,
        });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(notification.title, {
              body: notification.body,
              icon: notification.icon,
            });
          }
        });
      }
    }
  };

  return {
    show,
  };
};

export default useNotification;

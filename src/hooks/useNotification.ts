type ShowNotificationType = {
  title: string;
  body: string;
};

const useNotification = () => {
  const show = (notification: ShowNotificationType) => {
    if (window.electron?.ipcRenderer) {
      window.electron?.ipcRenderer.sendMessage("show-notification", {
        title: notification.title,
        body: notification.body,
      });
    }
  };

  return {
    show,
  };
};

export default useNotification;

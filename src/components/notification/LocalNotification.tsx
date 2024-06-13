import { NotificationType } from "../../hooks/useLocalNotification";

type Props = {
  notifications: NotificationType[];
};

function LocalNotification({ notifications }: Props) {
  return (
    <div className="fixed z-50 space-y-4 top-4 right-4 w-80">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="p-4 transition duration-300 ease-in-out transform bg-white border border-gray-300 rounded shadow-md animate-slide-in animate-fade-out"
        >
          <h4 className="font-bold">{notification.title}</h4>
          <p>{notification.body}</p>
        </div>
      ))}
    </div>
  );
}

export default LocalNotification;

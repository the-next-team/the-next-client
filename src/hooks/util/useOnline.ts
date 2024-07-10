import { useEffect, useState } from "react";

function useOnline() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const updateOnlineStatus = () => {
      const currentStatus = navigator.onLine;
      if (isOnline && !currentStatus) {
        setIsOnline(false);
      }

      if (!isOnline && currentStatus) {
        setIsOnline(true);
      }
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, [isOnline, setIsOnline]);

  return [isOnline];
}

export default useOnline;

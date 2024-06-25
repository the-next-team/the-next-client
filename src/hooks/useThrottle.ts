import { useRef } from "react";

const useThrottle = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const throttle = (callback: () => void, delay: number) => {
    if (!timerRef.current) {
      timerRef.current = setTimeout(() => {
        callback();

        timerRef.current = null;
      }, delay);
    }
  };

  return { throttle };
};

export default useThrottle;

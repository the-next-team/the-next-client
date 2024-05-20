import { useCallback, useEffect, useRef } from "react";

type Props = {
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number | undefined;
  delay?: number | undefined;
  threshold?: number | undefined;
};

function useScrollAnimation({
  direction = "up",
  duration = 1,
  delay = 0,
  threshold = 0,
}: Props) {
  const targetRef = useRef<HTMLDivElement>(null);

  const handleDirection = () => {
    switch (direction) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      default:
        return;
    }
  };

  const handleObserver = useCallback<IntersectionObserverCallback>(
    (entries) => {
      const [target] = entries;
      const { current } = targetRef;

      if (target.isIntersecting) {
        if (current != null) {
          current.style.transitionProperty = "all";
          current.style.transitionDuration = `${duration}s`;
          current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
          current.style.transitionDelay = `${delay}s`;
          current.style.opacity = "1";
          current.style.transform = "translate3d(0, 0, 0)";
        }
      }
    },
    [duration, delay]
  );

  useEffect(() => {
    const option: IntersectionObserverInit = {
      root: null,
      threshold: threshold,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [handleObserver]);

  return {
    ref: targetRef,
    style: {
      opacity: 0,
      transform: handleDirection(),
    },
  };
}

export default useScrollAnimation;

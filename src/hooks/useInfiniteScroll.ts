import { useCallback, useEffect, useRef, useState } from "react";

type Props = {};

export function useInfiniteScroll() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState<number>(0);

  const handleObserver = useCallback<IntersectionObserverCallback>(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting) {
        setCount((p) => p + 1);
      }
    },
    []
  );

  useEffect(() => {
    const option: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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
  }, [targetRef]);

  return { targetRef, count };
}

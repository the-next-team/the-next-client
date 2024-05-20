import { useRef } from "react";

function useMoveScroll() {
  const ref = useRef<HTMLDivElement | null>(null);
  const move = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  };

  return { ref, move };
}

export default useMoveScroll;

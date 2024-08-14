import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";

type Props = {
  className?: string | undefined;
};

function LoadingLottie({ className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = "";

      Lottie.loadAnimation({
        container: ref.current,
        animationData: require("../../assets/animations/loading.json"),
        renderer: "svg",
        loop: true,
        autoplay: true,
      });
    }
  }, [ref]);

  return <div ref={ref} className={className}></div>;
}

export default React.memo(LoadingLottie);

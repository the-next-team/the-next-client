import React, { useRef, useState } from "react";

type Props = {
  className?: string | undefined;
  children: React.ReactNode;
};

function HorizontalScroll({ className, children }: Props) {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDraging, setIsDraging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDraging(true);

    setStartX(event.clientX);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDraging(false);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDraging(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraging) return;
    const x = event.clientX - startX;
    sliderRef.current!.scrollLeft = scrollLeft - x;
  };

  const handleTouchStart = (event: any) => {
    setIsDraging(true);
    setStartX(event.touches[0].clientX);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleTouchMove = (event: any) => {
    if (!isDraging) return;
    const x = event.touches[0].clientX - startX;
    sliderRef.current!.scrollLeft = scrollLeft - x;
  };

  const handleTouchEnd = (event: any) => {
    setIsDraging(false);
  };

  return (
    <div
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  );
}

export default HorizontalScroll;

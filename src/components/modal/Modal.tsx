import React, { useEffect } from "react";

type Props = {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

function Modal({ open = false, onClose, children }: Props) {
  useEffect(() => {
    if (open) {
      // document.documentElement.style.overflow = "hidden";
      document.body.style.overflowY = "scroll";
    } else {
      // document.documentElement.style.overflow = "";

      setTimeout(() => {
        onClose && onClose();
      }, 300);
    }
  }, [open]);

  function handleScroll(event: any) {
    event.preventDefault();
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-black/[0.3] z-[9999] transition-opacity duration-300 ease-in-out ${
        open ? "opacity-100" : "opacity-0"
      }`}
      style={{
        pointerEvents: open ? "auto" : "none",
      }}
    >
      {children}
    </div>
  );
}

export default Modal;

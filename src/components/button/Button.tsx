import React from "react";
import Icon from "../icons/Icon";

type Props = {
  text?: string | undefined;
  size?: "auto" | "normal" | "large";
  type?: "submit" | "reset" | "button";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string | undefined;
  children?: React.ReactNode;
  icon?: string | undefined;
  loadingClass?: string | undefined;
  iconPosition?: "left" | "right";
  iconClass?: string | undefined;
  onClick?: () => void;
} & React.ComponentPropsWithoutRef<"button">;

function Button({
  text,
  size = "auto",
  type = "button",
  isLoading = false,
  disabled = false,
  className = "text-white bg-primary-500 hover:ring-2 hover:ring-opacity-80 ring-primary-500 hover:ring-offset-1",
  children,
  icon,
  loadingClass = "",
  iconPosition = "left",
  iconClass = "text-[16px]",
  onClick,
  ...props
}: Props) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`px-2 py-1 text-xs transition-all duration-150 break-keep rounded-sm flex items-center justify-center ${
          isLoading ? "pointer-events-none" : ""
        } ${disabled ? "opacity-40 cursor-not-allowed" : ""} ${size === "auto" ? "" : size === "normal" ? "w-14" : "w-28"} ${className}`}
        {...props}
      >
        {children && !isLoading && children}
        {!children && !isLoading && (
          <span className="flex items-center">
            {icon && (
              <span
                className={`${text && iconPosition === "right" ? "order-1 ml-2" : ""} ${
                  text && iconPosition === "left" ? "mr-2" : ""
                } ${iconClass}`}
              >
                <Icon icon={icon} />
              </span>
            )}
            <span>{text}</span>
          </span>
        )}
        {isLoading && (
          <>
            <svg
              className={`animate-spin h-3 w-3 mr-1 ${loadingClass}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading ...
          </>
        )}
      </button>
    </>
  );
}

export default Button;

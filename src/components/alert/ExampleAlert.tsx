import React, { useState } from "react";
import Icon from "../icons/Icon";

type Props = {
  children?: React.ReactNode;
  className?: string | undefined;
  icon?: string | undefined;
  label?: string | undefined;
  toggle?: () => void;
  dismissible?: boolean;
};

const Alert = ({
  children,
  className = "alert-dark",
  icon,
  toggle,
  dismissible,
  label,
}: Props) => {
  const [isShow, setIsShow] = useState(true);

  const handleDestroy = () => {
    setIsShow(false);
  };

  return (
    <>
      {isShow ? (
        <div className={`alert  ${className}`}>
          <div className="flex items-start space-x-3 rtl:space-x-reverse">
            {icon && (
              <div className="flex-0 text-[22px]">
                <Icon icon={icon} />
              </div>
            )}
            <div className="flex-1">{children ? children : label}</div>
            {dismissible && (
              <div
                className="text-2xl cursor-pointer flex-0"
                onClick={handleDestroy}
              >
                <Icon icon="heroicons-outline:x" />
              </div>
            )}
            {toggle && (
              <div className="text-2xl cursor-pointer flex-0" onClick={toggle}>
                <Icon icon="heroicons-outline:x" />
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Alert;

import React from "react";
import Bar from "./Bar";

type Props = {
  title?: string | undefined;
  className?: string | undefined;
  backClass?: string | undefined;
  titleClass?: string | undefined;
  children?: React.ReactNode;
  striped?: boolean;
  animate?: boolean;
  showValue?: boolean;
  value?: number;
};

const ProgressBar = ({
  title,
  children,
  value,
  backClass = "rounded-full",
  className = "bg-slate-900 dark:bg-slate-900",
  titleClass = "text-base font-normal",
  striped = false,
  animate = false,
  showValue = false,
}: Props) => {
  return (
    <div className="relative">
      {title && (
        <span
          className={`block text-slate-500 tracking-[0.01em] mb-2 ${titleClass}`}
        >
          {title}
        </span>
      )}
      {!children && (
        <div
          className={`progress w-full overflow-hidden bg-opacity-10 h-2 bg-slate-900 dark:bg-slate-700  ${backClass}`}
        >
          <Bar
            value={value}
            className={className}
            striped={striped}
            animate={animate}
            showValue={showValue}
          />
        </div>
      )}
      {children && (
        <div
          className={`progress w-full overflow-hidden bg-opacity-10 flex h-2 bg-slate-900 dark:bg-slate-700  ${backClass}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;

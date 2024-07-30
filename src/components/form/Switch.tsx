import { ChangeEvent } from "react";
import Icon from "../icons/Icon";

type Props = {
  label?: string | undefined;
  id?: string | undefined;
  prevIcon?: string | undefined;
  nextIcon?: string | undefined;
  badge?: boolean | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string | undefined;
  activeClass?: string | undefined;
  wrapperClass?: string | undefined;
  labelClass?: string | undefined;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  value?: boolean | undefined;
};

const Switch = ({
  prevIcon,
  nextIcon,
  label,
  id,
  disabled = false,
  value = false,
  onChange,
  activeClass = "bg-slate-900",
  wrapperClass = "",
  labelClass = "text-slate-500 text-xs",
  badge = false,
}: Props) => {
  return (
    <label
      className={`flex items-center gap-1 break-keep ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      } ${wrapperClass}`}
      htmlFor={id}
    >
      <input
        type="checkbox"
        className="hidden"
        checked={value}
        onChange={onChange}
        id={id}
        disabled={disabled}
      />
      <div
        className={`relative inline-flex h-5 w-[38px] items-center rounded-full transition-all duration-150 ${value ? activeClass : "bg-secondary-500"}`}
      >
        {badge && value && (
          <span className="absolute justify-center flex items-center left-1 top-1/2 -translate-y-1/2 font-semibold text-white">
            {prevIcon ? (
              <Icon icon={prevIcon} width={12} />
            ) : (
              <span className="text-[9px]">on</span>
            )}
          </span>
        )}
        {badge && !value && (
          <span className="absolute justify-center flex items-center right-1 top-1/2 -translate-y-1/2 font-semibold text-slate-900">
            {nextIcon ? (
              <Icon icon={nextIcon} width={12} />
            ) : (
              <span className="text-[9px]">Off</span>
            )}
          </span>
        )}
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-all duration-150 ${
            value ? "translate-x-5" : "translate-x-[2px]"
          }`}
        />
      </div>
      {label && <span className={labelClass}>{label}</span>}
    </label>
  );
};

export default Switch;

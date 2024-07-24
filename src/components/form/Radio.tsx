import { ForwardedRef, forwardRef } from "react";
import { v4 as uuidv4 } from "uuid";

type Props = {
  id?: string | undefined;
  label: string;
  //   onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string | undefined;
  activeClass?: string | undefined;
  wrapperClass?: string | undefined;
  labelClass?: string | undefined;
  disabled?: boolean;
  checked?: boolean;
  value?: string | number | readonly string[] | undefined;
} & React.ComponentPropsWithoutRef<"input">;

const Radio = (
  {
    id = uuidv4(),
    label,
    disabled = false,
    checked = false,
    value,
    // onChange,
    className = "w-3 h-3",
    wrapperClass = "",
    activeClass = "ring-slate-800 border-slate-800",
    labelClass = "text-slate-800 text-xs",
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={`flex items-center ${
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        } ${wrapperClass}`}
      >
        <input
          ref={ref}
          id={id}
          type="radio"
          className="hidden"
          value={value}
          checked={checked}
          //   onChange={onChange}
          disabled={disabled}
          {...props}
        />
        <span
          className={`flex-none bg-white rounded-full border inline-flex mr-1 relative transition-all duration-150 ${className} ${
            checked
              ? `${activeClass} ring-[6px] ring-inset ring-offset-1`
              : "border-slate-400"
          }`}
        />
        {label && <span className={labelClass}>{label}</span>}
      </label>
    </div>
  );
};

export default forwardRef(Radio);

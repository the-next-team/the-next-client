import { ForwardedRef, forwardRef } from "react";
import CheckImage from "../../assets/images/icon/ck-white.svg";
import { v4 as uuidv4 } from "uuid";

type Props = {
  id?: string;
  disabled?: boolean;
  label?: string;
  value?: string;
  checked?: boolean;
  //   onChange?: () => void;
  activeClass?: string;
  labelClass?: string | undefined;
} & React.ComponentPropsWithoutRef<"input">;

const Checkbox = (
  {
    id = uuidv4(),
    disabled = false,
    label,
    checked,
    value,
    // onChange,
    activeClass = "ring-black-500 bg-black-500",
    labelClass = checked ? "text-black-500 text-sm" : "text-slate-400 text-sm",
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <label
      htmlFor={id}
      className={`flex items-center select-none ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
    >
      <input
        ref={ref}
        id={id}
        type="checkbox"
        className="hidden"
        value={value}
        checked={checked}
        // onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span
        className={`h-4 w-4 border flex-none border-slate-100 rounded inline-flex mr-2 relative transition-all duration-150 ${
          checked ? `${activeClass} ring-1 ring-offset-1` : "bg-slate-100"
        }`}
      >
        {checked && (
          <img
            src={CheckImage}
            alt=""
            className="h-[10px] w-[10px] block m-auto"
          />
        )}
      </span>
      {label && <span className={labelClass}>{label}</span>}
    </label>
  );
};

export default forwardRef(Checkbox);

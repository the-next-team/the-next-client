import { ChangeEvent, ForwardedRef, forwardRef } from "react";

type Props = {
  label: string;
  id?: string | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string | undefined;
  activeClass?: string | undefined;
  wrapperClass?: string | undefined;
  labelClass?: string | undefined;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  value?: string | number | readonly string[] | undefined;
} & React.ComponentPropsWithoutRef<"input">;

const Radio = (
  {
    label,
    id,
    name,
    disabled = false,
    checked = false,
    value,
    onChange,
    className = "w-3 h-3",
    activeClass = "ring-black-500 border-black-500",
    wrapperClass = "",
    labelClass = checked ? "text-black-500 text-sm" : "text-slate-400 text-sm",
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
          type="radio"
          className="hidden"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          id={id}
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

import { ChangeEvent } from "react";

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
};

const Radio = ({
  label,
  id,
  name,
  disabled = false,
  value,
  onChange,
  activeClass = "ring-slate-500 border-slate-700",
  wrapperClass = "",
  labelClass = "text-slate-500 text-sm",
  checked = false,
  className = "w-3 h-3",
}: Props) => {
  return (
    <div>
      <label
        htmlFor={id}
        className={`flex items-center ${
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        } ${wrapperClass}`}
      >
        <input
          type="radio"
          className="hidden"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          id={id}
          disabled={disabled}
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

export default Radio;

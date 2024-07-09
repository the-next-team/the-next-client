import { ForwardedRef, forwardRef } from "react";

type Props = {
  label?: string;
  disabled?: boolean;
  validate?: string;
  error?: any;
  className?: string;
  description?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input(
  {
    label,
    disabled,
    validate,
    error,
    className = "",
    description,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className="">
      {label && (
        <label htmlFor={label} className="cursor-pointer">
          <p className="mb-1 text-sm text-custom-gray-300">{label}</p>
        </label>
      )}
      <div>
        <input
          ref={ref}
          id={label}
          type="text"
          disabled={disabled}
          className={`${className} ${
            disabled ? "bg-custom-blue-100" : "bg-transparent"
          } ${
            validate
              ? "ring-green-400 focus:ring-[1.5px]"
              : error
              ? "ring-red-400 focus:ring-[1.5px]"
              : "ring-custom-gray-100 focus:ring-custom-gray-300"
          } text-custom-black rounded-[2px] outline-none px-1 duration-100 ring-1 text-sm`}
          {...props}
        />
        {validate ? (
          <p className="mt-1 text-sm text-green-400">{validate}</p>
        ) : error ? (
          <p className="mt-1 text-sm text-red-400">{error?.message}</p>
        ) : description ? (
          <p className="mt-1 text-sm text-gray-400">{description}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default forwardRef(Input);

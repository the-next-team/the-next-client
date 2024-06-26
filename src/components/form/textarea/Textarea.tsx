import { ForwardedRef, forwardRef } from "react";

type Props = {
  cols?: number;
  rows?: number;
  label?: string;
  classLabel?: string;
  disabled?: boolean;
  className?: string;
  error?: any;
  validate?: string;
  description?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef(
  (
    {
      cols,
      rows = 3,
      label,
      classLabel,
      disabled,
      className,
      error,
      validate,
      description,
      ...props
    }: Props,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <div>
        {label && (
          <label htmlFor={label} className={`${classLabel} cursor-pointer`}>
            <p className="mb-1 text-sm text-custom-gray-300">{label}</p>
          </label>
        )}
        <textarea
          ref={ref}
          id={label}
          rows={rows}
          cols={cols}
          disabled={disabled}
          className={`${className} ${
            disabled ? "bg-custom-blue-100" : "bg-transparent"
          } ${
            validate
              ? "ring-green-400 focus:ring-[1.5px]"
              : error
              ? " ring-red-400 focus:ring-[1.5px]"
              : "ring-custom-gray-100 focus:ring-custom-gray-300"
          } block text-sm text-custom-black rounded-[2px] outline-none py-0.5 px-1 duration-100 ring-1`}
          {...props}
        />
        {validate ? (
          <p className="mt-1 text-sm text-green-400">{validate}</p>
        ) : error ? (
          <p className="mt-1 text-sm text-red-400">{error}</p>
        ) : description ? (
          <p className="mt-1 text-sm text-custom-gray-200">{description}</p>
        ) : (
          <></>
        )}
      </div>
    );
  }
);

export default Textarea;

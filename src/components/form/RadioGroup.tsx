import { ForwardedRef } from "react";

type Props = {
  label?: any | undefined;
  classLabel?: string | undefined;
  children: React.ReactNode;
  horizontal?: boolean;
  error?: any;
  validate?: string | undefined;
} & React.ComponentPropsWithoutRef<"input">;

function RadioGroup(
  {
    label,
    classLabel = "text-xs font-medium text-slate-600 break-words",
    children,
    horizontal = false,
    error,
    validate,
  }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div
      className={`${error ? "has-error" : ""} ${
        horizontal ? "flex items-center" : "flex flex-col items-end"
      } ${validate ? "is-valid" : ""}`}
    >
      {label && (
        <label
          className={`block cursor-pointer ${classLabel} ${
            horizontal ? "ml-2 mr-2 text-right md:w-[100px] w-[60px]" : "mb-1"
          }`}
        >
          {label}
        </label>
      )}
      <div className="flex gap-2">{children}</div>
    </div>
  );
}

export default RadioGroup;

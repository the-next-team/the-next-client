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
    classLabel = "form-label",
    children,
    horizontal = false,
    error,
    validate,
  }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div
      className={`fromGroup ${error ? "has-error" : ""}  ${
        horizontal ? "flex items-baseline" : ""
      }  ${validate ? "is-valid" : ""} `}
    >
      {label && (
        <label
          className={`block capitalize ${classLabel}  ${
            horizontal
              ? "flex-0 ml-2 mr-2 text-xs text-right md:w-[100px] w-[60px] break-words"
              : ""
          }`}
        >
          {label}
        </label>
      )}
      <div className={`relative ${horizontal ? "flex-1" : ""}`}>
        <div className="flex gap-2">{children}</div>
      </div>
    </div>
  );
}

export default RadioGroup;

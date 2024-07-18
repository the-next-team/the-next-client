import "cleave.js/dist/addons/cleave-phone.us";
import Cleave from "cleave.js/react";
import React, {
  FocusEventHandler,
  ForwardedRef,
  forwardRef,
  HTMLInputTypeAttribute,
  useState,
} from "react";
import Icon from "../icons/Icon";

type Props = {
  type?: HTMLInputTypeAttribute | undefined;
  placeholder?: string | undefined;
  classLabel?: string | undefined;
  className?: string | undefined;
  classGroup?: string | undefined;
  label?: string | undefined;
  icon?: string | undefined;
  id?: string | undefined;
  description?: string | undefined;
  readonly?: boolean;
  disabled?: boolean;
  validate?: string | undefined;
  horizontal?: boolean;
  isMask?: boolean;
  msgTooltip?: boolean;
  essential?: boolean;
  error?: any;
  value?: any;
  hasicon?: boolean;
  register?: any;
  onChange?: any;
  options?: any;
  onFocus?: FocusEventHandler | undefined;
  defaultValue?: string | number | readonly string[] | undefined;
} & React.ComponentPropsWithoutRef<"input">;

const TextInput = (
  {
    type,
    label,
    placeholder = "Add placeholder",
    classLabel = "form-label",
    className = "",
    classGroup = "",
    register,
    readonly = false,
    value,
    error,
    icon,
    disabled = false,
    essential = false,
    id,
    horizontal = false,
    validate,
    isMask = false,
    msgTooltip = false,
    description,
    hasicon = false,
    onChange,
    options,
    onFocus,
    defaultValue,
    ...props
  }: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`fromGroup ${error ? "has-error" : ""} ${
        horizontal ? "flex items-baseline" : ""
      } ${validate ? "is-valid" : ""}`}
    >
      {label && (
        <label
          htmlFor={id}
          className={`block capitalize ${classLabel} ${
            horizontal
              ? "flex-0 ml-2 mr-2 text-xs text-right md:w-[100px] w-[60px] break-words"
              : ""
          }`}
        >
          {label}
        </label>
      )}
      <div className={`relative ${horizontal ? "flex-1" : ""}`}>
        {!isMask && (
          <input
            ref={ref}
            type={type === "password" && open === true ? "text" : type}
            className={`${
              error ? " has-error" : ""
            } form-control text-xs py-1 ${
              essential ? "bg-warning-100 border-black-400" : ""
            } ${className}`}
            placeholder={placeholder}
            readOnly={readonly}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            onChange={onChange}
            {...props}
          />
        )}
        {isMask && (
          <Cleave
            placeholder={placeholder}
            options={options}
            className={`form-control py-1 ${error ? "has-error" : ""} ${
              essential ? "bg-warning-100 border-black-400" : ""
            } ${className}`}
            onFocus={onFocus}
            id={id}
            readOnly={readonly}
            disabled={disabled}
            onChange={onChange}
            {...props}
          />
        )}
        {/* icon */}
        <div className="flex text-xl absolute right-[14px] top-1/2 -translate-y-1/2 space-x-1">
          {hasicon && (
            <span
              className="cursor-pointer text-secondary-500"
              onClick={handleOpen}
            >
              {open && type === "password" && (
                <Icon icon="heroicons-outline:eye" />
              )}
              {!open && type === "password" && (
                <Icon icon="heroicons-outline:eye-off" />
              )}
            </span>
          )}

          {error && (
            <span className="text-danger-500">
              <Icon icon="heroicons-outline:information-circle" />
            </span>
          )}
          {validate && (
            <span className="text-success-500">
              <Icon icon="bi:check-lg" />
            </span>
          )}
        </div>
      </div>
      {/* error and success message*/}
      {error && (
        <div
          className={`mt-1 ${
            msgTooltip
              ? "inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded"
              : "text-danger-500 block text-xs"
          }`}
        >
          {error.message}
        </div>
      )}
      {/* validated and success message*/}
      {validate && (
        <div
          className={`mt-1 ${
            msgTooltip
              ? "inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded"
              : "text-success-500 block text-xs"
          }`}
        >
          {validate}
        </div>
      )}
      {/* only description */}
      {description && <span className="input-description">{description}</span>}
    </div>
  );
};

export default forwardRef(TextInput);

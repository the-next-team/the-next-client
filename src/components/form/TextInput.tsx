import "cleave.js/dist/addons/cleave-phone.us";
import Cleave from "cleave.js/react";
import {
  FocusEventHandler,
  forwardRef,
  HTMLInputTypeAttribute,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
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
  readOnly?: boolean;
  disabled?: boolean;
  validate?: string | undefined;
  horizontal?: boolean;
  isMask?: boolean;
  essential?: boolean;
  error?: any;
  value?: any;
  hasicon?: boolean;
  register?: any;
  //   onChange?: any;
  options?: any;
  onFocus?: FocusEventHandler | undefined;
  defaultValue?: string | number | readonly string[] | undefined;
} & React.ComponentPropsWithoutRef<"input">;

const TextInput = (
  {
    id = uuidv4(),
    type,
    label,
    placeholder = "",
    classLabel = "mb-1 text-xs cursor-pointer text-slate-600",
    className = "",
    classGroup = "",
    register,
    essential,
    readOnly = false,
    value,
    error,
    icon,
    disabled = false,
    horizontal = false,
    validate,
    isMask = false,
    description,
    hasicon = false,
    // onChange,
    options,
    onFocus,
    defaultValue,
    ...props
  }: Props,
  ref: React.ForwardedRef<HTMLInputElement>
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
          className={`block capitalize break-keep ${classLabel} ${
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
            id={id}
            type={type === "password" && open === true ? "text" : type}
            className={`${
              error ? " has-error" : ""
            } form-control text-xs py-1 border-slate-300 ${
              readOnly
                ? "!bg-white"
                : essential
                  ? "bg-warning-100"
                  : "bg-primary-50"
            } ${className}`}
            placeholder={placeholder}
            readOnly={readOnly}
            defaultValue={defaultValue}
            disabled={disabled}
            // onChange={onChange}
            {...props}
          />
        )}
        {isMask && (
          <Cleave
            // ref={ref}
            id={id}
            placeholder={placeholder}
            options={options}
            className={`${
              error ? " has-error" : ""
            } form-control text-xs py-1 border-slate-300 ${
              readOnly
                ? "!bg-white"
                : essential
                  ? "bg-warning-100"
                  : "bg-primary-50"
            } ${className}`}
            onFocus={onFocus}
            readOnly={readOnly}
            disabled={disabled}
            // onChange={onChange}
            {...props}
          />
        )}
        {/* icon */}
        <div className="absolute flex space-x-1 -translate-y-1/2 right-2 top-1/2">
          {hasicon && (
            <span
              className="cursor-pointer text-secondary-500"
              onClick={handleOpen}
            >
              {open && type === "password" && (
                <Icon icon="heroicons-outline:eye" width={16} />
              )}
              {!open && type === "password" && (
                <Icon icon="heroicons-outline:eye-off" width={16} />
              )}
            </span>
          )}
          {error && (
            <span className="text-danger-500">
              <Icon icon="heroicons-outline:information-circle" width={16} />
            </span>
          )}
          {validate && (
            <span className="text-success-500">
              <Icon icon="bi:check-lg" width={16} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(TextInput);

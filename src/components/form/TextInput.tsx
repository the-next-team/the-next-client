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
  name?: string | undefined;
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
    placeholder = "Add placeholder",
    classLabel = "form-label",
    className = "",
    classGroup = "",
    register,
    name,
    essential,
    readonly = false,
    value,
    error,
    icon,
    disabled = false,
    horizontal = false,
    validate,
    isMask = false,
    msgTooltip = false,
    description,
    hasicon = false,
    // onChange,
    options,
    onFocus,
    defaultValue,
    ...rest
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
              readonly
                ? "bg-slate-100"
                : essential
                ? "bg-warning-100"
                : "bg-primary-50"
            } ${className}`}
            placeholder={placeholder}
            readOnly={readonly}
            defaultValue={defaultValue}
            disabled={disabled}
            // onChange={onChange}
            {...rest}
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
              readonly
                ? "bg-slate-100"
                : essential
                ? "bg-warning-100"
                : "bg-primary-50"
            } ${className}`}
            onFocus={onFocus}
            readOnly={readonly}
            disabled={disabled}
            // onChange={onChange}
            {...rest}
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

import { ChangeEvent, ForwardedRef, forwardRef } from "react";
import Icon from "../icons/Icon";

type Props = {
  label?: string | undefined;
  classLabel?: string | undefined;
  classGroup?: string | undefined;
  placeholder?: string | undefined;
  description?: string | undefined;
  icon?: string | undefined;
  horizontal?: boolean | undefined;
  validate?: string | undefined;
  msgTooltip?: boolean | undefined;
  error?: any | undefined;
  register?: any | undefined;
  className?: string | undefined;
  name?: string | undefined;
  readOnly?: boolean | undefined;
  value?: string | undefined;
  disabled?: boolean | undefined;
  id?: string | undefined;
  cols?: number | undefined;
  rows?: number | undefined;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea = forwardRef(
  (
    {
      label,
      placeholder,
      classLabel = "form-label",
      className = "",
      classGroup = "",
      register,
      name,
      readOnly = false,
      value,
      error,
      icon,
      disabled = false,
      id,
      horizontal = false,
      validate,
      msgTooltip = false,
      description,
      cols,
      rows = 3,
      onChange,
      ...rest
    }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div
        className={`fromGroup ${error ? "has-error" : ""} ${
          horizontal ? "flex" : ""
        } ${validate ? "is-valid" : ""} `}
      >
        {label && (
          <label
            htmlFor={id}
            className={`block capitalize ${classLabel}  ${
              horizontal ? "flex-0 mr-6 md:w-[100px] w-[60px] break-words" : ""
            }`}
          >
            {label}
          </label>
        )}
        <div className={`relative ${horizontal ? "flex-1" : ""}`}>
          {name && (
            <textarea
              {...register(name)}
              {...rest}
              className={`${
                error ? " has-error" : " "
              } form-control py-2 ${className}`}
              placeholder={placeholder}
              readOnly={readOnly}
              disabled={disabled}
              id={id}
              cols={cols}
              rows={rows}
              onChange={onChange}
            ></textarea>
          )}
          {!name && (
            <textarea
              className={`${
                error ? " has-error" : " "
              } form-control py-2 ${className}`}
              placeholder={placeholder}
              readOnly={readOnly}
              disabled={disabled}
              id={id}
              cols={cols}
              rows={rows}
              onChange={onChange}
            ></textarea>
          )}

          {/* icon */}
          <div className="flex text-xl absolute right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse">
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
            className={` mt-2 ${
              msgTooltip
                ? " inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded"
                : " text-danger-500 block text-sm"
            }`}
          >
            {error.message}
          </div>
        )}
        {/* validated and success message*/}
        {validate && (
          <div
            className={` mt-2 ${
              msgTooltip
                ? " inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded"
                : " text-success-500 block text-sm"
            }`}
          >
            {validate}
          </div>
        )}
        {/* only description */}
        {description && (
          <span className="input-description">{description}</span>
        )}
      </div>
    );
  }
);

export default Textarea;

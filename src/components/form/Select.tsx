import { Icon } from "@iconify/react";
import { ChangeEvent, Fragment } from "react";

type Props = {
  label?: string;
  placeholder?: any;
  classLabel?: string;
  className?: string;
  classGroup?: string;
  register?: any;
  name?: string;
  readonly?: any;
  value?: string;
  error?: any;
  icon?: string;
  disabled?: boolean;
  id?: string;
  horizontal?: boolean;
  validate?: string;
  msgTooltip?: string;
  description?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  options?: any[];
  defaultValue?: string;
  size?: number;
};

const Select = ({
  label,
  placeholder = "Select Option",
  classLabel = "form-label",
  className = "",
  classGroup = "",
  register,
  name,
  readonly,
  value,
  error,
  icon,
  disabled = false,
  id,
  horizontal = false,
  validate,
  msgTooltip,
  description,
  onChange,
  options,
  defaultValue,
  size,
  ...rest
}: Props) => {
  options = options || Array(3).fill("option");
  return (
    <div
      className={`fromGroup relative ${error ? "has-error" : ""}  ${
        horizontal ? "flex" : ""
      }  ${validate ? "is-valid" : ""} `}
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
          <select
            onChange={onChange}
            {...register(name)}
            className={`${
              error ? " has-error" : " "
            } form-control py-2  appearance-none ${className}`}
            placeholder={placeholder}
            readOnly={readonly}
            disabled={disabled}
            id={id}
            value={value}
            size={size}
            defaultValue={defaultValue}
            {...rest}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option, i) => (
              <Fragment key={i}>
                {option.value && option.label ? (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ) : (
                  <option key={i} value={option}>
                    {option}
                  </option>
                )}
              </Fragment>
            ))}
          </select>
        )}
        {!name && (
          <select
            onChange={onChange}
            className={`${
              error ? " has-error" : " "
            } form-control py-2 appearance-none ${className}`}
            disabled={disabled}
            id={id}
            value={value}
            size={size}
            defaultValue={defaultValue}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option, i) => (
              <Fragment key={i}>
                {option.value && option.label ? (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ) : (
                  <option key={i} value={option}>
                    {option}
                  </option>
                )}
              </Fragment>
            ))}
          </select>
        )}

        {/* icon */}
        <div className="flex text-xl absolute right-[14px] top-1/2 -translate-y-1/2  space-x-1">
          <span className="relative inline-block pointer-events-none -right-2 text-slate-900 dark:text-slate-300">
            <Icon icon="heroicons:chevron-down" />
          </span>
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
      {description && <span className="input-description">{description}</span>}
    </div>
  );
};

export default Select;

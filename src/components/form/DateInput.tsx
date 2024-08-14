import "flatpickr/dist/themes/material_blue.css"; // Flatpickr 스타일링
import { ForwardedRef, forwardRef } from "react";
import Flatpickr from "react-flatpickr";
import { Controller } from "react-hook-form";
import Icon from "../icons/Icon";

type Props = {
  label?: string;
  classLabel?: string;
  classGroup?: string;
  placeholder?: string;
  description?: string;
  icon?: string;
  horizontal?: boolean;
  validate?: string;
  msgTooltip?: boolean;
  error?: any;
  control: any; // control을 외부에서 전달받음
  name: string;
  readOnly?: boolean;
  value?: string;
  disabled?: boolean;
  enableTime?: boolean;
  id?: string;
  cols?: number;
  className?: string | undefined;
  rows?: number;
  essential?: boolean;
  onChange?: (dates: Date[], currentDateString: string) => void;
  dateFormat?: "Y-m-d" | "Y-m-d H:i"; // 외부에서 날짜 형식을 받을 수 있게 추가
};

const DateInput = forwardRef(
  (
    {
      label,
      placeholder,
      classLabel = "form-label",
      className = "",
      classGroup = "",
      control,
      name,
      readOnly = false,
      enableTime = false,
      error,
      icon,
      disabled = false,
      essential = false,
      id,
      horizontal = false,
      validate,
      msgTooltip = false,
      description,
      cols,
      rows = 3,
      onChange,
      dateFormat = "Y-m-d", // 기본 날짜 형식
      ...rest
    }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div
        className={`formGroup ${error ? "has-error" : ""} ${
          horizontal ? "flex items-baseline" : ""
        } ${validate ? "is-valid" : ""} `}
      >
        {label && (
          <label
            htmlFor={id}
            className={`block capitalize break-keep ${classLabel} ${
              horizontal
                ? "flex-0 ml-2 text-xs text-right mr-2 md:w-[100px] w-[60px] break-words"
                : ""
            }`}
          >
            {label}
          </label>
        )}
        <div className={`relative ${horizontal ? "flex-1" : ""}`}>
          <Controller
            name={name}
            control={control}
            defaultValue={new Date().toISOString().split("T")[0]}
            render={({ field }) => (
              <Flatpickr
                {...field}
                {...rest}
                options={{ dateFormat, enableTime: enableTime }} // 날짜 형식을 Flatpickr 옵션으로 설정
                className={`${
                  error ? " has-error" : " "
                } form-control text-xs py-1 border-slate-300 ${
                  readOnly
                    ? "!bg-slate-100"
                    : essential
                    ? "!bg-warning-100"
                    : "!bg-primary-50"
                }${className}`}
                placeholder={placeholder}
                readOnly={readOnly}
                disabled={disabled}
                id={id}
                onChange={(dates: Date[], currentDateString: string) => {
                  field.onChange(currentDateString); // react-hook-form의 onChange
                  if (onChange) {
                    onChange(dates, currentDateString); // 추가적인 onChange 핸들러 호출
                  }
                }}
              />
            )}
          />
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

export default DateInput;

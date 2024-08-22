import { forwardRef } from "react";
import ko from "date-fns/locale/ko";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";
import DatePicker, { DatePickerProps } from "react-datepicker";

type Props = {
  type?: string;
} & DatePickerProps;

export const Datepicker = ({ type, ...props }: Props) => {
  const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <button className="" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <DatePicker
      locale={ko}
      showIcon
      icon={<Icon icon="heroicons:calendar-days-solid" width={16} />}
      shouldCloseOnSelect
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="flex items-center justify-between px-3 py-2 border-b rounded select-none">
          <button
            type="button"
            onClick={decreaseMonth}
            className={`${prevMonthButtonDisabled ? "hidden" : "text-slate-400"}`}
            disabled={prevMonthButtonDisabled}
          >
            <Icon
              className={`${prevMonthButtonDisabled ? "hidden" : "text-slate-400"}`}
              icon="heroicons:chevron-left-solid"
              width={16}
            />
          </button>
          <div className="flex items-center gap-1">
            <p className="text-sm text-slate-700">
              <span className="font-medium text-slate-800">
                {dayjs(date).year()}
              </span>
              년
            </p>
            <p className="text-sm text-slate-700">
              <span className="font-medium text-slate-800">
                {dayjs(date).month() + 1}
              </span>
              월
            </p>
          </div>
          <button
            type="button"
            onClick={increaseMonth}
            className={`${nextMonthButtonDisabled ? "hidden" : "text-slate-400"}`}
            disabled={nextMonthButtonDisabled}
          >
            <Icon icon="heroicons:chevron-right-solid" width={16} />
          </button>
        </div>
      )}
      customInput={<CustomInput />}
      {...props}
    />
  );
};

export default Datepicker;

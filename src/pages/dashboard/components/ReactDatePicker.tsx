import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import { Icon } from "@iconify/react";
import dayjs from "dayjs";

// 날짜 (년.월.일)
// 시간 (시.분.초)
// 기간 (년.월.일 - 년.월.일)
// 날짜+시간 (년.월.일 시.분.초)
const ReactDatePicker = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const CustomTimeInput = ({ date, value, onChange }: any) => (
    <div>
      {/* {
			[]
		} */}
      <input
        type="time"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );

  const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <button className="" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="mb-1 text-xs font-medium">날짜</p>
        <DatePicker
          locale={ko}
          showIcon
          icon={<Icon icon="heroicons:calendar-days-solid" width={16} />}
          selected={date}
          onChange={(date) => setDate(date)}
          shouldCloseOnSelect
          dateFormat="yyyy.MM.dd"
          minDate={new Date()}
          maxDate={new Date("2024-12-31")}
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
        />
      </div>
      <div>
        <p className="mb-1 text-xs font-medium">날짜+시간</p>
        <DatePicker
          locale={ko}
          showIcon
          icon={<Icon icon="heroicons:calendar-days-solid" width={16} />}
          selected={date}
          onChange={(date) => setDate(date)}
          shouldCloseOnSelect
          dateFormat="yyyy.MM.dd HH:mm"
          minDate={new Date()}
          maxDate={new Date("2024-12-31")}
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
          showTimeInput
          timeInputLabel=""
          customTimeInput={<CustomTimeInput />}
        />
      </div>
      <div>
        <p className="mb-1 text-xs font-medium">시간</p>
        <DatePicker
          locale={ko}
          showIcon
          icon={<Icon icon="heroicons:calendar-days-solid" width={16} />}
          selected={date}
          onChange={(date) => setDate(date)}
          shouldCloseOnSelect
          dateFormat="HH:mm"
          minDate={new Date()}
          maxDate={new Date("2024-12-31")}
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
          showTimeInput
          showTimeSelectOnly
          timeInputLabel=""
          customTimeInput={<CustomTimeInput />}
        />
      </div>
      <div>
        <p className="mb-1 text-xs font-medium">기간</p>
        <DatePicker
          locale={ko}
          showIcon
          icon={<Icon icon="heroicons:calendar-days-solid" width={16} />}
          selected={startDate}
          onChange={(dates) => {
            const [start, end] = dates;
            setStartDate(start ?? null);
            setEndDate(end);
          }}
          startDate={startDate ?? undefined}
          endDate={endDate ?? undefined}
          selectsRange
          shouldCloseOnSelect
          dateFormat="yyyy.MM.dd"
          minDate={new Date()}
          maxDate={new Date("2024-12-31")}
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
        />
      </div>
    </div>
  );
};

export default ReactDatePicker;

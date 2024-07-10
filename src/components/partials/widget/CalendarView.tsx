import dayjs from "dayjs";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarView = () => {
  const [value, onChange] = useState<any>(new Date());
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        calendarType="gregory"
        formatDay={(locale, date) => dayjs(date).format("DD")}
      />
    </div>
  );
};

export default CalendarView;

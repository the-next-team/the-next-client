import type { Meta, StoryObj } from "@storybook/react";
import Datepicker from "../../../../components/form/Datepicker";
import { useState } from "storybook/internal/preview-api";
import "react-datepicker/dist/react-datepicker.css";

const CustomTimeInput = ({ date, value, onChange }: any) => (
  <div>
    <input
      type="time"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

// 날짜 (년.월.일)
// 시간 (시.분.초)
// 기간 (년.월.일 - 년.월.일)
// 날짜+시간 (년.월.일 시.분.초)
const meta = {
  title: "Components/Forms/DatePicker",
  component: Datepicker,
  parameters: {
    layout: "centered",
    componentSubtitle: "달력",
    docs: {
      description: {
        component:
          "사용자가 날짜 또는 기간을 선택할 때 사용합니다.\n\n참조 : https://reactdatepicker.com/",
      },
    },
    disableZoom: true,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Datepicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    const [date, setDate] = useState<Date | null>(new Date());

    return (
      <Datepicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="yyyy.MM.dd"
      />
    );
  },
};

export const Basic: Story = {
  render: function Render() {
    const [date, setDate] = useState<Date | null>(new Date());

    return (
      <Datepicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="yyyy.MM.dd"
      />
    );
  },
};

// Range
export const Range: Story = {
  render: function Render(args) {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());

    return (
      <Datepicker
        selected={startDate}
        onChange={(dates) => {
          const [start, end] = dates;
          setStartDate(start ?? null);
          setEndDate(end);
        }}
        startDate={startDate ?? undefined}
        endDate={endDate ?? undefined}
        selectsRange
        dateFormat="yyyy.MM.dd"
      />
    );
  },
};

// Date & Time
export const DateAndTime: Story = {
  render: function Render(args) {
    const [date, setDate] = useState<Date | null>(new Date());

    return (
      <Datepicker
        selected={date}
        onChange={(date) => setDate(date)}
        showTimeInput
        timeInputLabel=""
        customTimeInput={<CustomTimeInput />}
        dateFormat="yyyy.MM.dd HH:mm"
      />
    );
  },
};

// Time
export const Time: Story = {
  render: function Render(args) {
    const [date, setDate] = useState<Date | null>(new Date());

    return (
      <Datepicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="HH:mm"
        showTimeInput
        showTimeSelectOnly
        timeInputLabel=""
        customTimeInput={<CustomTimeInput />}
      />
    );
  },
};

// Inline
export const Inline: Story = {
  render: function Render(args) {
    const [date, setDate] = useState<Date | null>(new Date());

    return (
      <Datepicker
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="yyyy.MM.dd"
        inline
      />
    );
  },
};

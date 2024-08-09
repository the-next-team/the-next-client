import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

const DatePicker = ({ ...props }) => {
  const [picker, setPicker] = useState(new Date());

  return (
    <Flatpickr
      value={picker}
      onChange={([date]) => setPicker(date)}
      {...props}
    />
  );
};

const meta = {
  title: "Components/Forms/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    componentSubtitle: "데이트피커",
    docs: {
      description: {
        component: "사용자가 날짜 또는 시간을 선택할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

// Basic
export const Basic: Story = () => (
  <Flatpickr className="py-2 form-control" id="default-picker" />
);
Basic.args = {
  ...Basic.args,
};

// Date & Time
export const DateAndTime: Story = () => (
  <Flatpickr
    data-enable-time
    id="date-time-picker"
    className="py-2 form-control"
  />
);
DateAndTime.args = {
  ...DateAndTime.args,
};

// Range
export const Range: Story = () => (
  <Flatpickr
    id="range-picker"
    className="py-2 form-control"
    options={{
      mode: "range",
      defaultDate: ["2020-02-01", "2020-02-15"],
    }}
  />
);
Range.args = {
  ...Range.args,
};

// Disabled Range
export const DisabledRange: Story = () => (
  <Flatpickr
    id="disabled-picker"
    className="py-2 form-control"
    options={{
      dateFormat: "Y-m-d",
      disable: [
        {
          from: new Date(),
          to: new Date(new Date().getTime() + 120 * 60 * 60 * 1000),
        },
      ],
    }}
  />
);
DisabledRange.args = {
  ...DisabledRange.args,
};

// Basic 24hrs
export const Basic24hrs: Story = () => (
  <Flatpickr
    className="py-2 form-control"
    id="timepicker"
    options={{
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:i",
      time_24hr: true,
    }}
  />
);
Basic24hrs.args = {
  ...Basic24hrs.args,
};

// Multiple Dates
export const MultipleDates: Story = () => (
  <Flatpickr
    id="multi-dates-picker"
    className="py-2 form-control"
    options={{ mode: "multiple" }}
  />
);
MultipleDates.args = {
  ...MultipleDates.args,
};

// Human Friendly
export const HumanFriendly: Story = () => (
  <Flatpickr
    id="hf-picker"
    className="py-2 form-control"
    options={{
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
    }}
  />
);
HumanFriendly.args = {
  ...HumanFriendly.args,
};

// Inline
export const Inline: Story = () => (
  <Flatpickr className="py-2 form-control" options={{ inline: true }} />
);
Inline.args = {
  ...Inline.args,
};

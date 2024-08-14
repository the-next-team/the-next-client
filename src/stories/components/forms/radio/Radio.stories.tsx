import type { Meta, StoryObj } from "@storybook/react";
import Radio from "../../../../components/form/Radio";
import { useState } from "storybook/internal/preview-api";
import { ChangeEvent } from "react";

const meta = {
  title: "Components/Forms/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    componentSubtitle: "라디오 버튼",
    docs: {
      description: {
        component: "사용자가 여러 옵션 중 하나를 선택해야 할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "라벨",
    },
    activeClass: {
      description: "선택상태 스타일",
    },
    checked: {
      description: "체크 여부",
    },
    className: {
      description: "스타일",
    },
    disabled: {
      description: "비활성화 여부",
    },
    id: {
      description: "아이디",
    },
    labelClass: {
      description: "라벨 스타일",
    },
    name: {
      description: "",
    },
    onChange: {
      description: "선택상태 변경시 이벤트",
    },
    value: {
      description: "값",
    },
    wrapperClass: {
      description: "스타일",
    },
  },
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Radio",
    checked: true,
  },
};

// Basic
export const Basic: Story = () => (
  <div className="flex flex-wrap justify-center gap-6">
    <Radio
      label="Checked"
      name="x"
      value="A"
      checked={true}
      onChange={() => {}}
    />
    <Radio
      label="UnChecked"
      name="x"
      value="B"
      checked={false}
      onChange={() => {}}
    />
  </div>
);
Basic.args = {
  ...Basic.args,
};

// Disabled
export const Disabled: Story = () => (
  <div className="flex flex-wrap justify-center gap-6">
    <Radio
      label="Checked disabled"
      disabled
      name="x2"
      value="C"
      checked={true}
      onChange={() => {}}
    />
    <Radio
      label="UnChecked disabled"
      name="x2"
      disabled
      value="D"
      checked={false}
      onChange={() => {}}
    />
  </div>
);
Disabled.args = {
  ...Disabled.args,
};

// Radio Group Options Array
export const Array: Story = {
  args: {
    ...Default.args,
  },
  render: function Render(args) {
    const [selectOption, setSelectOption] = useState("orange");
    const options: { value: string; label: string }[] = [
      {
        value: "orange",
        label: "Orange",
      },
      {
        value: "apple",
        label: "Apple",
      },
      {
        value: "banana",
        label: "Banana",
      },
    ];
    const handleOption = (e: ChangeEvent<HTMLInputElement>) => {
      setSelectOption(e.target.value);
    };
    return (
      <div>
        <div className="space-y-4">
          {options.map((option, index) => (
            <Radio
              key={index}
              label={option.label}
              name="option"
              value={option.value}
              checked={selectOption === option.value}
              onChange={handleOption}
            />
          ))}
        </div>
        {selectOption && (
          <div className="mt-3">
            <span className="text-sm text-gray-500">Selected Option: </span>
            <span className="text-sm text-gray-700">{selectOption}</span>
          </div>
        )}
      </div>
    );
  },
};

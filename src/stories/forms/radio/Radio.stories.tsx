import type { Meta, StoryObj } from "@storybook/react";
import Radio from "../../../components/form/Radio";

const meta = {
  title: "Forms/Radio",
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

const colors = [
  {
    value: "primary-500",
    label: "Primary",
    activeClass: "ring-primary-500 border-primary-500",
  },
  {
    value: "secondary-500",
    label: "Secondary",
    activeClass: "ring-secondary-500 border-secondary-500",
  },
  {
    value: "success-500",
    label: "Success",
    activeClass: "ring-success-500 border-success-500",
  },
  {
    value: "danger-500",
    label: "Danger",
    activeClass: "ring-danger-500 border-danger-500",
  },
  {
    value: "warning-500",
    label: "Warning",
    activeClass: "ring-warning-500 border-warning-500",
  },
  {
    value: "info-500",
    label: "Info",
    activeClass: "ring-info-500 border-info-500",
  },
];

// Theme
export const Theme: Story = () => (
  <div className="flex flex-wrap justify-center gap-6">
    {colors.map((color, index) => (
      <Radio
        key={index}
        label={color.label}
        name="color"
        value={color.value}
        checked={true}
        onChange={() => {}}
        activeClass={color.activeClass}
      />
    ))}
  </div>
);
Theme.args = {
  ...Theme.args,
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

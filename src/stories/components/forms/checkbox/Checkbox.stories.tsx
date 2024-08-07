import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../../../../components/checkbox/Checkbox";

const meta = {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    componentSubtitle: "체크박스",
    docs: {
      description: {
        component:
          "사용자가 하나 이상의 옵션을 선택하거나 해제할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      description: "아이디",
    },
    disabled: {
      description: "비활성화 여부",
    },
    label: {
      description: "라벨",
    },
    checked: {
      description: "선택 여부",
    },
    name: {
      description: "인풋명",
    },
    onChange: {
      description: "선택 상태 변경시 발생 이벤트",
    },
    activeClass: {
      description: "선택 상태 스타일",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "defaultCheckbox",
    label: "체크박스입니다.",
    checked: true,
  },
};

// Basic
export const Basic: Story = () => (
  <div className="flex flex-wrap gap-4">
    <Checkbox label="Checked" checked={true} onChange={() => {}} />
    <Checkbox label="UnChecked" checked={false} onChange={() => {}} />
  </div>
);
Basic.args = {
  ...Basic.args,
};

// Disabled
export const Disabled: Story = () => (
  <div className="flex flex-wrap gap-4">
    <Checkbox
      label="Checked disabled"
      disabled
      checked={true}
      onChange={() => {}}
    />
    <Checkbox
      label="UnChecked disabled"
      disabled
      checked={false}
      onChange={() => {}}
    />
  </div>
);
Disabled.args = {
  ...Disabled.args,
};

// Color
export const Color: Story = () => (
  <div className="flex flex-wrap gap-4">
    <Checkbox
      label="Primary"
      checked={true}
      activeClass="ring-primary-500 bg-primary-500"
      onChange={() => {}}
    />
    <Checkbox
      label="Secondary"
      checked={true}
      activeClass="ring-secondary-500 bg-secondary-500"
      onChange={() => {}}
    />
    <Checkbox
      label="Success"
      checked={true}
      activeClass="ring-success-500 bg-success-500"
      onChange={() => {}}
    />
    <Checkbox
      label="Danger"
      checked={true}
      activeClass="ring-danger-500 bg-danger-500"
      onChange={() => {}}
    />
    <Checkbox
      label="Warning"
      checked={true}
      activeClass="ring-warning-500 bg-warning-500"
      onChange={() => {}}
    />
    <Checkbox
      label="Info"
      checked={true}
      activeClass="ring-info-500 bg-info-500"
      onChange={() => {}}
    />
  </div>
);
Color.args = {
  ...Color.args,
};
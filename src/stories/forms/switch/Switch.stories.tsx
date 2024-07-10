import type { Meta, StoryObj } from "@storybook/react";
import Switch from "../../../components/form/Switch";

const meta = {
  title: "Forms/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    componentSubtitle: "스위치",
    docs: {
      description: {
        component:
          "사용자가 옵션의 상태를 활성화 또는 비활성화할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    activeClass: {
      description: "활성 스타일",
    },
    badge: {
      description: "뱃지",
    },
    checked: {
      description: "선택 여부",
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
    label: {
      description: "라벨",
    },
    labelClass: {
      description: "라벨 스타일",
    },
    name: {
      description: "",
    },
    nextIcon: {
      description: "다음 아이콘",
    },
    onChange: {
      description: "상태변경시 발생 이벤트",
    },
    prevIcon: {
      description: "이전 아이콘",
    },
    value: {
      description: "값",
    },
    wrapperClass: {
      description: "",
    },
  },
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Switch",
    activeClass: "bg-primary-500",
    value: true,
    onChange: () => {},
  },
};

// Basic
export const Basic: Story = () => (
  <div className="flex flex-wrap justify-center gap-6">
    <Switch label="Active Switch" value={true} onChange={() => {}} />
    <Switch label="Inactive Switch" value={false} onChange={() => {}} />
  </div>
);
Basic.args = {
  ...Basic.args,
};

// Disabled
export const Disabled: Story = () => (
  <div className="flex flex-wrap justify-center gap-6">
    <Switch
      label="Disabled Active Switch"
      disabled
      value={true}
      onChange={() => {}}
    />
    <Switch
      label="Disabled Inactive Switch"
      disabled
      value={false}
      onChange={() => {}}
    />
  </div>
);
Disabled.args = {
  ...Disabled.args,
};

// Theme
export const Theme: Story = () => (
  <div className="flex flex-wrap justify-center gap-6">
    <Switch
      label="primary"
      activeClass="bg-primary-500"
      value={true}
      onChange={() => {}}
    />
    <Switch
      label="secondary"
      activeClass="bg-secondary-500"
      value={true}
      onChange={() => {}}
    />
    <Switch
      label="success"
      activeClass="bg-success-500"
      value={true}
      onChange={() => {}}
    />
    <Switch
      label="danger"
      activeClass="bg-danger-500"
      value={true}
      onChange={() => {}}
    />
    <Switch
      label="warning"
      activeClass="bg-warning-500"
      value={true}
      onChange={() => {}}
    />
    <Switch
      label="info"
      activeClass="bg-info-500"
      value={true}
      onChange={() => {}}
    />
  </div>
);
Theme.args = {
  ...Theme.args,
};

// With Badge
export const WithBadge: Story = () => (
  <div className="flex flex-wrap justify-center gap-6">
    <Switch
      label="primary"
      activeClass="bg-primary-500"
      value={true}
      onChange={() => {}}
      badge
    />
    <Switch
      label="secondary"
      activeClass="bg-secondary-500"
      value={true}
      onChange={() => {}}
      badge
    />
    <Switch
      label="success"
      activeClass="bg-success-500"
      value={true}
      onChange={() => {}}
      badge
    />
    <Switch
      label="danger"
      activeClass="bg-danger-500"
      value={true}
      onChange={() => {}}
      badge
    />
    <Switch
      label="warning"
      activeClass="bg-warning-500"
      value={true}
      onChange={() => {}}
      badge
    />
    <Switch
      label="info"
      activeClass="bg-info-500"
      value={true}
      onChange={() => {}}
      badge
    />
  </div>
);
WithBadge.args = {
  ...WithBadge.args,
};

// With Icon
export const WithIcon: Story = () => (
  <div className="flex flex-wrap justify-center gap-6">
    <Switch
      label="primary"
      activeClass="bg-primary-500"
      value={true}
      onChange={() => {}}
      badge
      prevIcon="heroicons-outline:volume-up"
      nextIcon="heroicons-outline:volume-off"
    />
    <Switch
      label="secondary"
      activeClass="bg-secondary-500"
      value={true}
      onChange={() => {}}
      badge
      prevIcon="heroicons-outline:check"
      nextIcon="heroicons-outline:x"
    />
    <Switch
      label="success"
      activeClass="bg-success-500"
      value={true}
      onChange={() => {}}
      badge
      prevIcon="heroicons-outline:sun"
      nextIcon="heroicons-outline:moon"
    />
    <Switch
      label="danger"
      activeClass="bg-danger-500"
      value={true}
      onChange={() => {}}
      badge
      prevIcon="heroicons-outline:lock-closed"
      nextIcon="heroicons-outline:lock-open"
    />
    <Switch
      label="warning"
      activeClass="bg-warning-500"
      value={true}
      onChange={() => {}}
      badge
      prevIcon="heroicons-outline:check"
      nextIcon="heroicons-outline:ban"
    />
    <Switch
      label="info"
      activeClass="bg-info-500"
      value={true}
      onChange={() => {}}
      badge
      prevIcon="heroicons-outline:phone-incoming"
      nextIcon="heroicons-outline:phone-missed-call"
    />
  </div>
);
WithIcon.args = {
  ...WithIcon.args,
};

import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../../components/button/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    componentSubtitle: "버튼",
    docs: {
      description: {
        component: "사용자와 상호작용하고 기능을 실행할 때 사용합니다.",
      },
    },
  },
  argTypes: {
    className: {
      description: "스타일",
    },
    disabled: {
      description: "비활성화 여부",
    },
    icon: {
      description: "추가 아이콘",
    },
    text: {
      description: "버튼 라벨",
    },
    onClick: {
      description: "클릭시 이벤트",
    },
    type: {
      description: "버튼 타입",
    },
  },
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Button",
    className: "btn-primary",
  },
};

// Basic
export const Basic: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button text="primary" className="btn-primary" />
    <Button text="secondary" className="btn-secondary" />
    <Button text="success" className="btn-success" />
    <Button text="info" className="btn-info" />
    <Button text="warning" className="btn-warning" />
    <Button text="danger" className="btn-danger" />
    <Button text="Dark" className="btn-dark" />
    <Button text="Light" className="btn-light" />
    <Button text="White" className="bg-white text-slate-900" />
  </div>
);
Basic.args = {
  ...Basic.args,
};

// Outline
export const Outline: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button text="primary" className="btn-outline-primary" />
    <Button text="secondary" className="btn-outline-secondary" />
    <Button text="success" className="btn-outline-success" />
    <Button text="info" className="btn-outline-info" />
    <Button text="warning" className="btn-outline-warning" />
    <Button text="danger" className="btn-outline-danger" />
    <Button text="dark" className="btn-outline-dark" />
    <Button text="light" className="btn-outline-light" />
  </div>
);
Outline.args = {
  ...Outline.args,
};

// Light Color
export const LightColor: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button text="primary" className="btn-primary light" />
    <Button text="secondary" className="btn-secondary light" />
    <Button text="success" className="btn-success light" />
    <Button text="info" className="btn-info light" />
    <Button text="warning" className="btn-warning light" />
    <Button text="danger" className="btn-danger light" />
    <Button text="Dark" className="btn-dark light" />
    <Button text="Light" className="btn-light light" />
  </div>
);
LightColor.args = {
  ...LightColor.args,
};

// Icon
export const Icon: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button
      icon="heroicons-outline:newspaper"
      text="Left Icon"
      className="btn-primary"
    />
    <Button
      icon="heroicons-outline:newspaper"
      text="Left Icon"
      className="btn-outline-primary"
    />
    <Button
      icon="heroicons-outline:newspaper"
      text="Right Icon"
      className="btn-primary"
    />
    <Button
      icon="heroicons-outline:newspaper"
      text="Right Icon"
      className="btn-outline-primary"
    />
    <Button
      icon="heroicons-outline:newspaper"
      className="btn-outline-primary"
    />
    <Button icon="heroicons-outline:newspaper" className="btn-primary" />
  </div>
);
Icon.args = {
  ...Icon.args,
};
// Size
export const Size: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button text="Auto" className="btn-primary" size="auto" />
    <Button text="Normal" className="btn-primary" size="normal" />
    <Button text="Large" className="btn-primary" size="large" />
  </div>
);
Size.args = {
  ...Size.args,
};

// Disabled
export const Disabled: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button text="primary" className="btn-primary " disabled />
    <Button text="secondary" className="btn-secondary" disabled />
    <Button text="success" className="btn-success" disabled />
    <Button text="info" className="btn-info" disabled />
    <Button text="warning" className="btn-warning" disabled />
    <Button text="danger" className="btn-danger" disabled />
    <Button text="Dark" className="btn-dark" disabled />
    <Button text="Light" className="btn-light" disabled />
    <Button text="White" className="bg-white text-slate-900" disabled />
  </div>
);
Disabled.args = {
  ...Disabled.args,
};

// Loading
export const Loading: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button text="primary" className="btn-primary " isLoading />
    <Button text="secondary" className="btn-secondary" isLoading />
    <Button text="success" className="btn-success" isLoading />
    <Button text="info" className="btn-info" isLoading />
    <Button text="warning" className="btn-warning" isLoading />
    <Button text="danger" className="btn-danger" isLoading />
    <Button text="Dark" className="btn-dark" isLoading />
    <Button text="Light" className="btn-light" isLoading />
    <Button text="White" className="bg-white text-slate-900" isLoading />
  </div>
);
Loading.args = {
  ...Loading.args,
};

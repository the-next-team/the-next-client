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
    iconPosition: {
      description: "추가 아이콘 위치",
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
  },
};

// Icon
export const Icon: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button icon="heroicons-outline:newspaper" text="Left Icon" />
    <Button
      icon="heroicons-outline:newspaper"
      text="Right Icon"
      iconPosition="right"
    />
    <Button icon="heroicons-outline:newspaper" />
    <Button icon="heroicons-outline:newspaper" iconPosition="right" />
  </div>
);
Icon.args = {
  ...Icon.args,
};

// Size
export const Size: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button text="Auto" size="auto" />
    <Button text="Normal" size="normal" />
    <Button text="Large" size="large" />
  </div>
);
Size.args = {
  ...Size.args,
};

// Disabled
export const Disabled: Story = () => <Button text="Disabled" disabled />;
Disabled.args = {
  ...Disabled.args,
};

// Loading
export const Loading: Story = () => <Button text="Loading" isLoading />;
Loading.args = {
  ...Loading.args,
};

import type { Meta, StoryObj } from "@storybook/react";
import { HashRouter } from "react-router-dom";
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
  decorators: [
    (Story: any) => (
      <HashRouter>
        <Story />
      </HashRouter>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Button",
  },
};

// Basic
export const Basic: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button text="primary" className="btn-primary " />
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
    <Button text="secondary" className=" btn-secondary light" />
    <Button text="success" className=" btn-success light" />
    <Button text="info" className=" btn-info light" />
    <Button text="warning" className=" btn-warning light" />
    <Button text="danger" className=" btn-danger light" />
    <Button text="Dark" className=" btn-dark light" />
    <Button text="Light" className=" btn-light light" />
  </div>
);
LightColor.args = {
  ...LightColor.args,
};

// Raised
export const Raised: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button text="primary" className="btn-primary shadow-base2" />
    <Button text="secondary" className=" btn-secondary shadow-base2" />
    <Button text="success" className=" btn-success shadow-base2" />
    <Button text="info" className=" btn-info shadow-base2" />
    <Button text="warning" className=" btn-warning shadow-base2" />
    <Button text="danger" className=" btn-danger shadow-base2" />
    <Button text="Dark" className=" btn-dark shadow-base2" />
    <Button text="Light" className=" btn-light shadow-base2" />
    <Button text="White" className="bg-white text-slate-900 shadow-base2" />
  </div>
);
Raised.args = {
  ...Raised.args,
};

// Rounded
export const Rounded: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button text="primary" className="btn-primary rounded-[999px]" />
    <Button text="secondary" className=" btn-secondary rounded-[999px]" />
    <Button text="success" className=" btn-success rounded-[999px]" />
    <Button text="info" className=" btn-info rounded-[999px]" />
    <Button text="warning" className=" btn-warning rounded-[999px]" />
    <Button text="danger" className=" btn-danger rounded-[999px]" />
    <Button text="Dark" className=" btn-dark rounded-[999px]" />
    <Button text="Light" className=" btn-light rounded-[999px]" />
    <Button text="White" className=" bg-white text-slate-900 rounded-[999px]" />
  </div>
);
Rounded.args = {
  ...Rounded.args,
};

// Rounded Outline
export const RoundedOutline: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button text="primary" className="btn-outline-primary rounded-[999px]" />
    <Button
      text="secondary"
      className="btn-outline-secondary rounded-[999px]"
    />
    <Button text="success" className="btn-outline-success rounded-[999px]" />
    <Button text="info" className="btn-outline-info rounded-[999px]" />
    <Button text="warning" className="btn-outline-warning rounded-[999px]" />
    <Button text="danger" className="btn-outline-danger rounded-[999px]" />
    <Button text="dark" className="btn-outline-dark rounded-[999px]" />
    <Button text="light" className="btn-outline-light rounded-[999px]" />
  </div>
);
RoundedOutline.args = {
  ...RoundedOutline.args,
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

// Icon Rounded
export const IconRounded: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button
      icon="heroicons-outline:newspaper"
      text="Left Icon"
      className="btn-primary  rounded-[999px]"
    />
    <Button
      icon="heroicons-outline:newspaper"
      text="Left Icon"
      className="btn-outline-primary rounded-[999px] "
    />
    <Button
      icon="heroicons-outline:newspaper"
      text="Right Icon"
      className="btn-primary rounded-[999px]"
    />
    <Button
      icon="heroicons-outline:newspaper"
      text="Right Icon"
      className="btn-outline-primary rounded-[999px]"
    />
    <Button
      icon="heroicons-outline:newspaper"
      className="btn-outline-primary  rounded-[999px]"
    />
    <Button
      icon="heroicons-outline:newspaper"
      className="btn-primary  rounded-[999px]"
    />
    <Button
      icon="heroicons-outline:newspaper"
      className="flex items-center justify-center w-12 h-12 p-0 rounded-full btn-primary"
    />
  </div>
);
IconRounded.args = {
  ...IconRounded.args,
};

// Size
export const Size: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button text="Large Button" className="btn-primary btn-xl" />
    <Button text="Default" className="btn-primary" />
    <Button text="Small" className="btn-primary btn-sm" />
  </div>
);
Size.args = {
  ...Size.args,
};

// Disabled
export const Disabled: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button text="primary" className="btn-primary " disabled />
    <Button text="secondary" className=" btn-secondary" disabled />
    <Button text="success" className=" btn-success" disabled />
    <Button text="info" className=" btn-info" disabled />
    <Button text="warning" className=" btn-warning" disabled />
    <Button text="danger" className=" btn-danger" disabled />
    <Button text="Dark" className=" btn-dark" disabled />
    <Button text="Light" className=" btn-light" disabled />
    <Button text="White" className="bg-white text-slate-900" disabled />
  </div>
);
Disabled.args = {
  ...Disabled.args,
};

// Block
export const Block: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button text="primary" className="btn-primary block-btn" type="submit" />
    <Button
      icon="heroicons-outline:newspaper"
      text="Left Icon"
      className="btn-secondary block-btn"
    />
    <Button
      icon="heroicons-outline:newspaper"
      text="Right Icon"
      className=" btn-success block-btn"
    />
  </div>
);
Block.args = {
  ...Block.args,
};

// Loading
export const Loading: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Button text="primary" className="btn-primary " isLoading />
    <Button text="secondary" className=" btn-secondary" isLoading />
    <Button text="success" className=" btn-success" isLoading />
    <Button text="info" className=" btn-info" isLoading />
    <Button text="warning" className=" btn-warning" isLoading />
    <Button text="danger" className=" btn-danger" isLoading />
    <Button text="Dark" className=" btn-dark" isLoading />
    <Button text="Light" className=" btn-light" isLoading />
    <Button text="White" className="bg-white text-slate-900" isLoading />
  </div>
);
Loading.args = {
  ...Loading.args,
};

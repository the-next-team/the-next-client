import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../../components/button/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    componentSubtitle: "",
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
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
  <div className="flex flex-col items-start gap-2">
    <Button text="Basic Button" />
    <Button
      text="Rounded Button"
      className="text-white rounded-full bg-custom-black"
    />
  </div>
);
Basic.args = {
  ...Basic.args,
};

// Disabled
export const Disabled: Story = () => <Button text="disabled Button" disabled />;
Disabled.args = {
  ...Disabled.args,
};

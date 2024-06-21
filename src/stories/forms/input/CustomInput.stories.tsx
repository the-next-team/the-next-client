import type { Meta, StoryObj } from "@storybook/react";
import Input from "../../../components/form/input/Input";

const meta = {
  title: "Forms/Input",
  component: Input,
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    validate: { control: "text" },
  },
};

// Basic
export const Basic: Story = () => (
  <div className="flex flex-col gap-4">
    <Input
      label="Basic Input"
      placeholder="placeholder"
      description="description"
    />
    <Input label="Disabled Input" disabled placeholder="Disabled Input" />
  </div>
);
Basic.args = {
  ...Basic.args,
};

// States
export const States: Story = () => (
  <div className="flex flex-col gap-4">
    <Input
      label="Valid State"
      placeholder="Valid"
      validate="This is valid state."
    />
    <Input
      label="Invalid State"
      placeholder="Invalid"
      error="This is invalid state."
    />
  </div>
);
States.args = {
  ...States.args,
};

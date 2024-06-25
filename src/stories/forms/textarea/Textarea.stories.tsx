import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "../../../components/form/textarea/Textarea";

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
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
} satisfies Meta<typeof Textarea>;

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
    <Textarea
      label="Basic"
      placeholder="placeholder"
      description="description"
    />
    <Textarea label="Disabled" disabled placeholder="Disabled" />
  </div>
);
Basic.args = {
  ...Basic.args,
};

// States
export const States: Story = () => (
  <div className="flex flex-col gap-4">
    <Textarea
      label="Valid State"
      placeholder="Valid"
      validate="This is valid state."
    />
    <Textarea
      label="Invalid State"
      placeholder="Invalid"
      error="This is invalid state"
    />
  </div>
);
States.args = {
  ...States.args,
};

import type { Meta, StoryObj } from "@storybook/react";
import CustomInput from "../../../components/form/input/CustomInput";

const meta = {
  title: "Forms/Input",
  component: CustomInput,
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
  decorators: [
    (Story) => (
      <div className="w-52">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CustomInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  argTypes: {
    validate: { control: "text" },
  },
};

// Basic
export const Basic: Story = () => (
  <div className="flex flex-col gap-4">
    <CustomInput
      label="Basic Input"
      placeholder="placeholder"
      description="description"
    />
    <CustomInput label="Disabled Input" disabled placeholder="Disabled Input" />
  </div>
);
Basic.args = {
  ...Basic.args,
};

// States
export const States: Story = () => (
  <div className="flex flex-col gap-4">
    <CustomInput
      label="Valid State"
      placeholder="Valid"
      validate="This is valid state."
    />
    <CustomInput
      label="Invalid State"
      placeholder="Invalid"
      error="This is invalid state."
    />
  </div>
);
States.args = {
  ...States.args,
};

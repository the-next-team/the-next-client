import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../../../components/form/checkbox/Checkbox";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "checkbox",
  },
};

// Basic
export const Basic: Story = () => (
  <div className="flex flex-col items-start gap-4">
    <Checkbox label="Checked" checked />
    <Checkbox label="UnChecked" checked={false} />
  </div>
);
Basic.args = {
  ...Basic.args,
};

// Disabled
export const Disabled: Story = () => (
  <div className="flex flex-col items-start gap-4">
    <Checkbox label="Checked Disabled" disabled checked />
    <Checkbox label="UnChecked Disabled" disabled checked={false} />
  </div>
);
Disabled.args = {
  ...Disabled.args,
};

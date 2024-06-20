import type { Meta, StoryObj } from "@storybook/react";
import Radio from "../../../components/form/radio/Radio";

const meta = {
  title: "Forms/Radio",
  component: Radio,
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "radio",
  },
};

// Basic
export const Basic: Story = () => (
  <div className="flex flex-col items-start gap-4">
    <Radio label="Checked" checked />
    <Radio label="UnChecked" checked={false} />
  </div>
);
Basic.args = {
  ...Basic.args,
};

// Disabled
export const Disabled: Story = () => (
  <div className="flex flex-col items-start gap-4">
    <Radio label="Checked Disabled" disabled checked />
    <Radio label="UnChecked Disabled" disabled checked={false} />
  </div>
);
Disabled.args = {
  ...Disabled.args,
};

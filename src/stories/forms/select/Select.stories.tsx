import type { Meta, StoryObj } from "@storybook/react";
import Select from "../../../components/form/select/Select";

const meta = {
  title: "Forms/Select",
  component: Select,
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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: "red", value: "red" },
      { label: "green", value: "green" },
      { label: "blue", value: "blue" },
    ],
  },
};

// Basic
export const Basic: Story = () => (
  <div className="flex flex-col items-start gap-4">
    <Select {...Default.args} label="Basic" placeholder="placeholder" />
    <Select {...Default.args} label="Disabled" disabled />
  </div>
);
Basic.args = {
  ...Basic.args,
};

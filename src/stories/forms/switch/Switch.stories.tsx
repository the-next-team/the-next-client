import type { Meta, StoryObj } from "@storybook/react";
import Switch from "../../../components/form/switch/Switch";

const meta = {
  title: "Forms/Switch",
  component: Switch,
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
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: true,
  },
};

// Basic
export const Basic: Story = () => (
  <div className="flex flex-col items-start gap-4">
    <Switch label="Active" value={true} />
    <Switch label="Inactive" value={false} />
  </div>
);
Basic.args = {
  ...Basic.args,
};

// Disabled
export const Disabled: Story = () => (
  <div className="flex flex-col items-start gap-4">
    <Switch label="Active Disabled" disabled value={true} />
    <Switch label="Inactive Disabled" disabled value={false} />
  </div>
);
Disabled.args = {
  ...Disabled.args,
};

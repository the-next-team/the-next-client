import type { Meta, StoryObj } from "@storybook/react";
import Badge from "../../../components/badge/Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
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
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Badge",
  },
};

// Basic
export const Basic: Story = () => (
  <div className="flex flex-col items-center gap-2">
    <Badge text="Basic Badge" />
    <Badge text="Badge With Icon" icon="heroicons:star-20-solid" />
  </div>
);
Basic.args = {
  ...Basic.args,
};

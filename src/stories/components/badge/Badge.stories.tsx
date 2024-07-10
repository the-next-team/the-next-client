import type { Meta, StoryObj } from "@storybook/react";
import Badge from "../../../components/badge/Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    componentSubtitle: "뱃지",
    docs: {
      description: {
        component:
          "일련의 정보를 간결하게 표시하고 시각적으로 강조할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "라벨",
    },
    icon: {
      description: "아이콘",
    },
    className: {
      description: "스타일",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "badge",
    className: "text-white bg-primary-500",
  },
};

// Basic Badges
export const BasicBadges: Story = () => (
  <div className="flex gap-2">
    <Badge label="primary" className="text-white bg-primary-500" />
    <Badge label="secondary" className="text-white bg-secondary-500" />
    <Badge label="danger" className="text-white bg-danger-500" />
    <Badge label="success" className="text-white bg-success-500" />
    <Badge label="info" className="text-white bg-info-500" />
    <Badge label="warning" className="text-white bg-warning-500" />
    <Badge label="Dark" className="text-white bg-slate-800" />
  </div>
);
BasicBadges.args = {
  ...BasicBadges.args,
};

// Pill Badges
export const PillBadges: Story = () => (
  <div className="flex gap-2">
    <Badge label="primary" className="text-white bg-primary-500 pill" />
    <Badge label="secondary" className="text-white bg-secondary-500 pill" />
    <Badge label="danger" className="text-white bg-danger-500 pill" />
    <Badge label="success" className="text-white bg-success-500 pill" />
    <Badge label="info" className="text-white bg-info-500 pill" />
    <Badge label="warning" className="text-white bg-warning-500 pill" />
    <Badge label="Dark" className="text-white bg-slate-800 pill" />
  </div>
);
PillBadges.args = {
  ...PillBadges.args,
};

// Soft Badges
export const SoftBadges: Story = () => (
  <div className="flex gap-2">
    <Badge
      label="primary"
      className="bg-primary-500 text-primary-500 bg-opacity-[0.12]"
    />
    <Badge
      label="secondary"
      className="bg-secondary-500 text-secondary-500 bg-opacity-[0.12]"
    />
    <Badge
      label="danger"
      className="bg-danger-500 text-danger-500 bg-opacity-[0.12]"
    />
    <Badge
      label="success"
      className="bg-success-500 text-success-500 bg-opacity-[0.12]"
    />
    <Badge
      label="info"
      className="bg-info-500 text-info-500 bg-opacity-[0.12]"
    />
    <Badge
      label="warning"
      className="bg-warning-500 text-warning-500 bg-opacity-[0.12]"
    />
    <Badge
      label="Dark"
      className="bg-slate-800 text-slate-800 bg-opacity-[0.12]"
    />
  </div>
);
SoftBadges.args = {
  ...SoftBadges.args,
};

// Soft Pill Badges
export const SoftPillBadges: Story = () => (
  <div className="flex gap-2">
    <Badge
      label="primary"
      className="bg-primary-500 text-primary-500 bg-opacity-[0.12]"
    />
    <Badge
      label="secondary"
      className="bg-secondary-500 text-secondary-500 bg-opacity-[0.12]"
    />
    <Badge
      label="danger"
      className="bg-danger-500 text-danger-500 bg-opacity-[0.12]"
    />
    <Badge
      label="success"
      className="bg-success-500 text-success-500 bg-opacity-[0.12]"
    />
    <Badge
      label="info"
      className="bg-info-500 text-info-500 bg-opacity-[0.12]"
    />
    <Badge
      label="warning"
      className="bg-warning-500 text-warning-500 bg-opacity-[0.12]"
    />
    <Badge
      label="Dark"
      className="bg-slate-800 text-slate-800 bg-opacity-[0.12]"
    />
  </div>
);
SoftPillBadges.args = {
  ...SoftPillBadges.args,
};

// Badges With Icon
export const BadgesWithIcon: Story = () => (
  <div className="flex gap-2">
    <Badge
      label="primary"
      className="text-white bg-primary-500 "
      icon="heroicons-outline:star"
    />
    <Badge
      label="secondary"
      className="text-white bg-secondary-500"
      icon="heroicons-outline:star"
    />
    <Badge
      label="danger"
      className="text-white bg-danger-500"
      icon="heroicons-outline:star"
    />
    <Badge
      label="success"
      className="text-white bg-success-500"
      icon="heroicons-outline:star"
    />
    <Badge
      label="info"
      className="text-white bg-info-500"
      icon="heroicons-outline:star"
    />
    <Badge
      label="warning"
      className="text-white bg-warning-500"
      icon="heroicons-outline:star"
    />
    <Badge
      label="Dark"
      className="text-white bg-slate-800"
      icon="heroicons-outline:star"
    />
  </div>
);
BadgesWithIcon.args = {
  ...BadgesWithIcon.args,
};

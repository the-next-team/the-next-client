import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "../../../components/pregress/ProgressBar";
import Bar from "../../../components/pregress/Bar";

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
    componentSubtitle: "프로그래스바",
    docs: {
      description: {
        component: "작업의 진행 상황을 시각적으로 표시할 때 사용합니다.",
      },
    },
  },
  argTypes: {
    title: {
      description: "제목",
    },
    className: {
      description: "스타일",
    },
    animate: {
      description: "애니메이션 여부",
    },
    showValue: {
      description: "값 표시 여부",
    },
    striped: {
      description: "줄 표시 여부",
    },
    value: {
      description: "비율 (단위: %)",
    },
    titleClass: {
      description: "제목 스타일",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 20,
  },
};

// Basic
export const Basic: Story = () => (
  <div className="flex flex-col gap-6">
    <ProgressBar value={30} />
    <ProgressBar value={80} />
    <ProgressBar value={50} />
    <ProgressBar value={70} />
  </div>
);
Basic.args = {
  ...Basic.args,
};

// Color
export const Color: Story = () => (
  <div className="flex flex-col gap-6">
    <ProgressBar value={30} className="bg-primary-500" />
    <ProgressBar value={80} className="bg-danger-500" />
    <ProgressBar value={50} className="bg-warning-500" />
    <ProgressBar value={70} className=" bg-info-500" />
  </div>
);
Color.args = {
  ...Color.args,
};

// Height
export const Height: Story = () => (
  <div className="flex flex-col gap-6">
    <ProgressBar value={30} title="Progress sm" />
    <ProgressBar
      value={50}
      title="Progress md"
      backClass="h-[10px] rounded-[999px]"
      className="bg-primary-500"
    />
    <ProgressBar
      value={80}
      title="Progress xl"
      backClass="h-[14px] rounded-[999px]"
      className="bg-danger-500"
    />
    <ProgressBar
      value={70}
      title="Progress xl"
      backClass="h-4 rounded-[999px]"
      className="bg-warning-500"
    />
  </div>
);
Height.args = {
  ...Height.args,
};

// Striped
export const Striped: Story = () => (
  <div className="flex flex-col gap-6">
    <ProgressBar
      value={30}
      className="bg-slate-900 "
      striped
      backClass="h-3 rounded-[999px]"
    />
    <ProgressBar
      value={30}
      className="bg-primary-500 "
      striped
      backClass="h-3 rounded-[999px]"
    />
    <ProgressBar
      value={80}
      className="bg-danger-500 "
      striped
      backClass="h-3 rounded-[999px]"
    />
    <ProgressBar
      value={50}
      className="bg-warning-500 "
      striped
      backClass="h-3 rounded-[999px]"
    />
    <ProgressBar
      value={70}
      className=" bg-info-500"
      striped
      backClass="h-3 rounded-[999px]"
    />
  </div>
);
Striped.args = {
  ...Striped.args,
};

// Striped Animate
export const StripedAnimate: Story = () => (
  <div className="flex flex-col gap-6">
    <ProgressBar
      value={30}
      className="bg-slate-900"
      striped
      backClass="h-3 rounded-[999px]"
      animate
    />
    <ProgressBar
      value={60}
      className="bg-primary-500"
      striped
      backClass="h-3 rounded-[999px]"
      animate
    />
    <ProgressBar
      value={40}
      className="bg-danger-500"
      striped
      backClass="h-3 rounded-[999px]"
      animate
    />
    <ProgressBar
      value={50}
      className="bg-warning-500"
      striped
      backClass="h-3 rounded-[999px]"
      animate
    />
    <ProgressBar
      value={70}
      className=" bg-info-500"
      striped
      backClass="h-3 rounded-[999px]"
      animate
    />
  </div>
);
StripedAnimate.args = {
  ...StripedAnimate.args,
};

// Value
export const Value: Story = () => (
  <div className="flex flex-col gap-6">
    <ProgressBar
      value={30}
      className="bg-slate-900 "
      showValue
      backClass="h-3 rounded-[999px]"
    />
    <ProgressBar
      value={60}
      className="bg-primary-500 "
      backClass="h-3 rounded-[999px]"
      showValue
    />
    <ProgressBar
      value={40}
      className="bg-danger-500 "
      showValue
      backClass="h-3 rounded-[999px]"
    />
    <ProgressBar
      value={50}
      className="bg-warning-500 "
      backClass="h-3 rounded-[999px]"
      showValue
    />
    <ProgressBar
      value={70}
      className=" bg-info-500"
      backClass="h-3 rounded-[999px]"
      showValue
    />
  </div>
);
Value.args = {
  ...Value.args,
};

// Multiple Bar
export const MultipleBar: Story = () => (
  <div className="flex flex-col gap-6">
    <ProgressBar backClass="h-3 rounded-[999px]">
      <Bar value={10} className="bg-primary-500" />
      <Bar value={20} className="bg-success-500" />
      <Bar value={20} className="bg-danger-500" />
    </ProgressBar>
    <ProgressBar backClass="h-3 rounded-[999px]">
      <Bar value={12} className="bg-primary-500" showValue />
      <Bar value={25} className="bg-success-500" showValue />
      <Bar value={25} className="bg-danger-500" showValue />
    </ProgressBar>
    <ProgressBar backClass="h-3 rounded-[999px]">
      <Bar value={15} className="bg-primary-500" striped />
      <Bar value={30} className="bg-success-500" striped />
      <Bar value={30} className="bg-danger-500" striped />
    </ProgressBar>
    <ProgressBar backClass="h-3 rounded-[999px]">
      <Bar value={18} className="bg-primary-500" showValue striped />
      <Bar value={33} className="bg-success-500" showValue striped />
      <Bar value={33} className="bg-danger-500" showValue striped />
    </ProgressBar>
  </div>
);
MultipleBar.args = {
  ...MultipleBar.args,
};

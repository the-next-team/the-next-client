import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "../../../components/tooltip/Tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    componentSubtitle: "툴팁",
    docs: {
      description: {
        component:
          "사용자에게 요소에 대한 추가 정보를 제공하거나 설명할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      description: "제목",
    },
    arrow: {
      description: "화살표",
    },
    placement: {
      description: "위치",
    },
    className: {
      description: "스타일",
    },
    allowHTML: {
      description: "HTML 콘텐츠 여부",
    },
    duration: {
      description: "지속시간",
    },
    content: {
      description: "HTML 콘텐츠",
    },
    interactive: {
      description: "상호작용",
    },
    maxWidth: {
      description: "최대 너비",
    },
    animation: {
      description: "전환 애니메이션",
    },
    theme: {
      description: "테마",
    },
    trigger: {
      description: "이벤트 트리거",
    },
  },
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "hover",
    content: "tooltip",
  },
};

// Tooltip Position
export const TooltipPosition: Story = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Tooltip
      title="Tooltip on top"
      content="Tooltip on top!"
      placement="top"
      className="btn btn-outline-dark "
      theme="primary"
      arrow
    />
    <Tooltip
      title="Tooltip on Right"
      content="Tooltip on Right!"
      placement="right"
      className="btn btn-outline-dark"
      arrow
    />
    <Tooltip
      title="Tooltip on Left"
      content="Tooltip on Left!"
      placement="left"
      className="btn btn-outline-dark"
      arrow
    />
    <Tooltip
      title="Tooltip on bottom"
      content="Tooltip on bottom!"
      placement="bottom"
      className="btn btn-outline-dark"
      arrow
    />
  </div>
);
TooltipPosition.args = {
  ...TooltipPosition.args,
};

// Theme style
export const Theme: Story = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Tooltip
      title="primary"
      content="primary style"
      placement="top"
      className="btn btn-outline-primary "
      arrow
      theme="primary"
    />
    <Tooltip
      title="secondary"
      content="secondary style"
      placement="top"
      className="btn btn-outline-secondary "
      arrow
      theme="secondary"
    />
    <Tooltip
      title="success"
      content="success style"
      placement="top"
      className="btn btn-outline-success"
      arrow
      theme="success"
    />
    <Tooltip
      title="info"
      content="info style"
      placement="top"
      className="btn btn-outline-info "
      arrow
      theme="info"
    />
    <Tooltip
      title="warning"
      content="warning style"
      placement="top"
      className="btn btn-outline-warning "
      arrow
      theme="warning"
    />
    <Tooltip
      title="danger"
      content="danger style"
      placement="top"
      className="btn btn-outline-danger "
      arrow
      theme="danger"
    />
    <Tooltip
      title="dark"
      content="Dark style"
      placement="top"
      className="btn btn-outline-dark "
      arrow
      theme="dark"
    />
    <Tooltip
      title="light"
      content="Light style"
      placement="top"
      className="btn btn-outline-light "
      arrow
      theme="light"
    />
  </div>
);
Theme.args = {
  ...Theme.args,
};

// Animations
export const Animations: Story = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Tooltip
      title="Shift-away"
      content="Shift-away"
      placement="top"
      className="btn btn-outline-dark "
      arrow
      animation="shift-away"
    />
    <Tooltip
      title="Shift-toward"
      content="Shift-toward"
      placement="top"
      className="btn btn-outline-dark "
      arrow
      animation="shift-toward"
    />
    <Tooltip
      title="Scale"
      content="Scale"
      placement="top"
      className="btn btn-outline-dark "
      arrow
      animation="scale"
    />
    <Tooltip
      title="Fade"
      content="Fade"
      placement="top"
      className="btn btn-outline-dark "
      arrow
      animation="fade"
    />
    <Tooltip
      title="Perspective"
      content="Perspective"
      placement="top"
      className="btn btn-outline-dark "
      arrow
      animation="Perspective"
    />
  </div>
);
Animations.args = {
  ...Animations.args,
};

// Triggers
export const Triggers: Story = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Tooltip
      title="Mouseenter"
      content="Mouseenter"
      placement="top"
      className="btn btn-outline-dark "
      arrow
      trigger="mouseenter"
    />
    <Tooltip
      title="Click"
      content="Click"
      placement="top"
      className="btn btn-outline-dark "
      arrow
      trigger="click"
    />
  </div>
);
Triggers.args = {
  ...Triggers.args,
};

// Popover Positions
export const PopoverPositions: Story = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Tooltip
      title="Popover Top"
      placement="top"
      className="btn btn-outline-dark"
      arrow
      allowHTML
      interactive
      theme="custom-light"
      maxWidth="320px"
      content={
        <div className="text-sm text-slate-600">
          <h1 className="text-base bg-slate-900 text-white rounded-t px-[9px] mt-[-5px] mx-[-9px] mb-3 py-2">
            Popover Top
          </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          reprehenderit doloremque mollitia esse eveniet dolor. Eos quasi amet,
          assumenda omnis aliquid cum tenetur ratione tempore similique, itaque
          maiores et vel.
        </div>
      }
    ></Tooltip>
    <Tooltip
      title="Popover bottom"
      placement="bottom"
      className="btn btn-outline-dark"
      arrow
      allowHTML
      interactive
      theme="custom-light"
      maxWidth="320px"
      content={
        <div className="text-sm text-slate-600">
          <h1 className="text-base bg-slate-900 text-white rounded-t px-[9px] mt-[-5px] mx-[-9px] mb-3 py-2">
            Popover Bottom
          </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          reprehenderit doloremque mollitia esse eveniet dolor. Eos quasi amet,
          assumenda omnis aliquid cum tenetur ratione tempore similique, itaque
          maiores et vel.
        </div>
      }
    />
    <Tooltip
      title="Popover left"
      placement="left"
      className="btn btn-outline-dark"
      arrow
      allowHTML
      interactive
      theme="custom-light"
      maxWidth="320px"
      content={
        <div className="text-sm text-slate-600">
          <h1 className="text-base bg-slate-900 text-white rounded-t px-[9px] mt-[-5px] mx-[-9px] mb-3 py-2">
            Popover Left
          </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          reprehenderit doloremque mollitia esse eveniet dolor. Eos quasi amet,
          assumenda omnis aliquid cum tenetur ratione tempore similique, itaque
          maiores et vel.
        </div>
      }
    />
    <Tooltip
      title="Popover right"
      placement="right"
      className="btn btn-outline-dark"
      arrow
      allowHTML
      interactive
      theme="custom-light"
      maxWidth="320px"
      content={
        <div className="text-sm text-slate-600">
          <h1 className="text-base bg-slate-900 text-white rounded-t px-[9px] mt-[-5px] mx-[-9px] mb-3 py-2">
            Popover Right
          </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          reprehenderit doloremque mollitia esse eveniet dolor. Eos quasi amet,
          assumenda omnis aliquid cum tenetur ratione tempore similique, itaque
          maiores et vel.
        </div>
      }
    />
  </div>
);
PopoverPositions.args = {
  ...PopoverPositions.args,
};

// Interactive
export const Interactive: Story = () => (
  <Tooltip
    title="Interactive"
    content="Interactive tooltip"
    placement="top"
    className="btn btn-outline-dark "
    arrow
    interactive
  />
);
Interactive.args = {
  ...Interactive.args,
};

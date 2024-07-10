import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "../../../components/form/Textarea";

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    componentSubtitle: "텍스트 입력란",
    docs: {
      description: {
        component: "사용자가 긴 텍스트를 입력하거나 편집해야 할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "라벨",
    },
    className: {
      description: "스타일",
    },
    classGroup: {
      description: "",
    },
    placeholder: {
      description: "필드 임시 메시지",
    },
    description: {
      description: "설명",
    },
    icon: {
      description: "추가 아이콘",
    },
    horizontal: {
      description: "가로모드 여부",
    },
    validate: {
      description: "검증",
    },
    msgTooltip: {
      description: "하단 문구 툴팁 스타일 여부",
    },
    error: {
      description: "에러",
    },
    register: {
      description: "",
    },
    readOnly: {
      description: "읽기전용 여부",
    },
    disabled: {
      description: "비활성화 여부",
    },
    value: {
      description: "값",
    },
    cols: {
      description: "세로줄 수",
    },
    rows: {
      description: "가로줄 수",
    },
    name: {
      description: "",
    },
    onChange: {
      description: "입력시 이벤트",
    },
    ref: {
      description: "",
    },
  },
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Add placeholder",
  },
};

// Displayed Rows
export const DisplayedRows: Story = () => (
  <Textarea label="Textarea" id="pn4" placeholder="Textarea" rows={5} />
);
DisplayedRows.args = {
  ...DisplayedRows.args,
};

// Horizontal Sizing
export const HorizontalSizing: Story = () => (
  <div className="flex flex-col gap-6">
    <Textarea
      label="Large"
      id="largesize2"
      placeholder="Large Input"
      rows={4}
      horizontal
    />
    <Textarea label="Default" id="df" placeholder="Default Input" horizontal />
    <Textarea
      label="Small"
      id="smallsize2"
      placeholder="Small Input"
      rows={2}
      horizontal
    />
  </div>
);
HorizontalSizing.args = {
  ...HorizontalSizing.args,
};

// States
export const States: Story = () => (
  <div className="flex flex-col gap-6">
    <Textarea
      label="Valid State"
      id="ValidState"
      placeholder="Valid"
      validate="This is valid state."
    />
    <Textarea
      label="Invalid State"
      id="InvalidState"
      placeholder="Invalid"
      error={{
        message: "This is invalid state",
      }}
    />{" "}
  </div>
);
States.args = {
  ...States.args,
};

// States With Tootltips
export const StatesWithTootltips: Story = () => (
  <div className="flex flex-col gap-6">
    <Textarea
      label="Valid State"
      id="ValidState"
      placeholder="Valid"
      validate="This is valid state."
      msgTooltip
    />
    <Textarea
      label="Invalid State"
      id="InvalidState"
      placeholder="Invalid"
      error={{
        message: "This is invalid state",
      }}
      msgTooltip
    />
  </div>
);
StatesWithTootltips.args = {
  ...StatesWithTootltips.args,
};

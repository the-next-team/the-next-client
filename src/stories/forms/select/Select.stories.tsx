import type { Meta, StoryObj } from "@storybook/react";
import Select from "../../../components/form/Select";

const meta = {
  title: "Forms/Select",
  component: Select,
  parameters: {
    layout: "centered",
    componentSubtitle: "셀렉트",
    docs: {
      description: {
        component: "사용자가 하나 이상의 항목을 선택할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      description: "기본값",
    },
    error: {
      description: "에러",
    },
    description: {
      description: "설명",
    },
    placeholder: {
      description: "필드 임시 메시지",
    },
    label: {
      description: "라벨",
    },
    classLabel: {
      description: "라벨 스타일",
    },
    className: {
      description: "스타일",
    },
    register: {
      description: "",
    },
    name: {
      description: "인풋명",
    },
    msgTooltip: {
      description: "하단 메시지 툴팁 스타일 적용 여부",
    },
    classGroup: {
      description: "",
    },
    readonly: {
      description: "읽기전용 여부",
    },
    validate: {
      description: "검증",
    },
    options: {
      description: "옵션",
    },
    value: {
      description: "값",
    },
    icon: {
      description: "아이콘",
    },
    disabled: {
      description: "비활성화 여부",
    },
    id: {
      description: "아이디",
    },
    horizontal: {
      description: "가로 정렬",
    },
    size: {
      description: "한 번에 보일 옵션의 개수",
    },
    onChange: {
      description: "값 변경시 발생 이벤트",
    },
  },
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  {
    value: "option1",
    label: "Option 1",
  },
  {
    value: "option2",
    label: "Option 2",
  },
  {
    value: "option3",
    label: "Option 3",
  },
];

export const Default: Story = {
  args: {
    options: options,
  },
};

// Basic
export const Basic: Story = () => (
  <Select
    label="Basic Select"
    options={options}
    onChange={() => {}}
    value={"option1"}
  />
);
Basic.args = {
  ...Basic.args,
};

// Disabled
export const Disabled: Story = () => (
  <Select
    label="Disabled Select"
    options={options}
    onChange={() => {}}
    value={"option1"}
    disabled
  />
);
Disabled.args = {
  ...Disabled.args,
};

// Size
export const Size: Story = () => (
  <Select
    label="Size Select"
    options={options}
    onChange={() => {}}
    value={"option1"}
    size={5}
  />
);
Size.args = {
  ...Size.args,
};

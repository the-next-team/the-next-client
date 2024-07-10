import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "../../../components/form/TextInput";
import InputGroup from "../../../components/form/InputGroup";

const meta = {
  title: "Forms/Input",
  component: TextInput,
  parameters: {
    layout: "centered",
    componentSubtitle: "인풋",
    docs: {
      description: {
        component: "사용자로부터 텍스트를 입력받을 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "타입",
    },
    label: {
      description: "라벨",
    },
    placeholder: {
      description: "필드 임시 메시지",
    },
    classLabel: {
      description: "라벨 스타일",
    },
    className: {
      description: "스타일",
    },
    classGroup: {
      description: "",
    },
    register: {
      description: "",
    },
    name: {
      description: "인풋명",
    },
    readonly: {
      description: "읽기전용 여부",
    },
    value: {
      description: "값",
    },
    error: {
      description: "에러",
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
    validate: {
      description: "검증",
    },
    isMask: {
      description: "입력 패턴 지정 여부",
    },
    msgTooltip: {
      description: "하단 메시지 툴팁 스타일 적용 여부",
    },
    description: {
      description: "설명",
    },
    hasicon: {
      description: "값 보기/숨기기 제어 여부",
    },
    onChange: {
      description: "값 변경시 발생 이벤트",
    },
    options: {
      description: "입력 패턴 옵션",
    },
    onFocus: {
      description: "입력 패턴 포커스 상태시 발생 이벤트",
    },
    defaultValue: {
      description: "기본값",
    },
  },
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

// Basic Inputs
export const Basic: Story = () => (
  <div className="flex flex-col gap-4">
    <TextInput
      label="Project Name*"
      id="pn"
      type="text"
      placeholder="Management dashboard "
    />
    <TextInput
      label="Readonly Input"
      id="pn2"
      readonly
      type="text"
      placeholder="You can't update me :P"
    />
    <TextInput
      label="Disabled Input"
      id="pn3"
      placeholder=" Disabled Input"
      disabled
      type="text"
    />
  </div>
);
Basic.args = {
  ...Basic.args,
};

// Sizing Options
export const Size: Story = () => (
  <div className="flex flex-col gap-4">
    <TextInput
      label="Large"
      id="largesize"
      type="text"
      placeholder="Large Input"
      className="h-[52px]"
    />
    <TextInput
      label="Default"
      id="defaultsize"
      type="text"
      placeholder="Default Input"
    />
    <TextInput
      label="Small"
      id="smallsize"
      type="text"
      placeholder="Small Input"
      className="h-[32px] text-sm"
    />
  </div>
);
Size.args = {
  ...Size.args,
};

// Horizontal Sizing Options
export const HorizontalSize: Story = () => (
  <div className="flex flex-col gap-4">
    <TextInput
      label="Large"
      id="largesize2"
      type="text"
      placeholder="Large Input"
      className="h-[52px]"
      horizontal
    />
    <TextInput
      label="Default"
      id="defaultsize2"
      type="text"
      placeholder="Default Input"
      horizontal
    />
    <TextInput
      label="Small"
      id="smallsize2"
      type="text"
      placeholder="Small Input"
      className="h-[32px] text-sm"
      horizontal
    />
  </div>
);
HorizontalSize.args = {
  ...HorizontalSize.args,
};

// Valid
export const Valid: Story = () => (
  <div className="flex flex-col gap-4">
    <TextInput
      label="Valid State"
      id="ValidState"
      type="text"
      placeholder="Valid"
      validate="This is valid state."
      msgTooltip
    />
    <TextInput
      label="Invalid State"
      id="InvalidState"
      type="text"
      placeholder="Invalid"
      error={{
        message: "This is invalid state",
      }}
      msgTooltip
    />
  </div>
);
Valid.args = {
  ...Valid.args,
};

// Mask
export const Mask: Story = () => (
  <div className="grid grid-cols-2 gap-6">
    <TextInput
      label="Credit Card"
      isMask
      options={{ creditCard: true }}
      placeholder="0000 0000 0000 0000"
    />
    <InputGroup
      label="Phone Number"
      prepend="MY (+6)"
      placeholder="Phone Number"
      id="phoneNumber"
      options={{ phone: true, phoneRegionCode: "US" }}
      isMask
    />
    <TextInput
      label="Date"
      id="date"
      options={{ date: true, datePattern: ["Y", "m", "d"] }}
      placeholder="YYYY-MM-DD"
      isMask
    />
    <TextInput
      label="Time"
      id="time"
      options={{ time: true, timePattern: ["h", "m", "s"] }}
      placeholder="HH:MM:SS"
      isMask
    />
    <TextInput
      label="Numeral Formatting"
      id="nu"
      options={{ numeral: true }}
      placeholder="10,000"
      isMask
    />
    <TextInput
      label="Blocks"
      id="block"
      options={{ blocks: [4, 3, 3], uppercase: true }}
      placeholder="Block[1,4,7]"
      isMask
    />
    <TextInput
      label="Delimiters"
      id="delimiters"
      options={{ delimiter: "·", blocks: [3, 3, 3], uppercase: true }}
      placeholder="Delimiter: '.'"
      isMask
    />
    <TextInput
      label="Custom Delimiters"
      id="customDelimiter"
      options={{
        delimiters: [".", ".", "-"],
        blocks: [3, 3, 3, 2],
        uppercase: true,
      }}
      placeholder="Delimiter: ['.', '.', '-']"
      isMask
    />
    <TextInput
      label="prefix"
      id="prefix"
      options={{
        prefix: "+88",
        blocks: [3, 3, 3, 4],
        uppercase: true,
      }}
      placeholder="+88"
      isMask
    />
  </div>
);
Mask.args = {
  ...Mask.args,
};

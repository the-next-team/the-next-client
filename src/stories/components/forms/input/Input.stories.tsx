import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "../../../../components/form/TextInput";
import { useForm } from "react-hook-form";

const meta = {
  title: "Components/Forms/Input",
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
    readOnly: {
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
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

// Basic Inputs
export const Basic: Story = () => (
  <div className="flex flex-col gap-4">
    <TextInput type="text" label="Defult(기본)" placeholder="defult" />
    <TextInput
      type="text"
      label="Essential(필수)"
      placeholder="essential"
      essential
    />
    <TextInput
      type="text"
      label="Readonly(읽기전용)"
      readOnly
      placeholder="readonly"
    />
    <TextInput
      type="text"
      label="Disabled(비활성화)"
      disabled
      placeholder="disabled"
    />
  </div>
);
Basic.args = {
  ...Basic.args,
};

// States
export const States: Story = () => (
  <div className="flex flex-col gap-4">
    <TextInput
      label="Valid State"
      type="text"
      placeholder="Valid"
      validate="This is valid state."
    />
    <TextInput
      label="Invalid State"
      type="text"
      placeholder="Invalid"
      error="This is invalid state"
    />
  </div>
);
States.args = {
  ...States.args,
};

// Mask
export const Mask: Story = {
  render: function render() {
    const { control } = useForm();
    return (
      <div className="grid grid-cols-2 gap-6">
        <TextInput
          label="Credit Card(신용카드)"
          isMask
          name="CreditCard"
          control={control}
          options={{ creditCard: true }}
          placeholder="0000 0000 0000 0000"
        />
        <TextInput
          label="Phone Number(휴대폰번호)"
          placeholder="Phone Number"
          options={{ phone: true, phoneRegionCode: "KR" }}
          isMask
          name="PhoneNumber"
          control={control}
        />
        <TextInput
          label="Date(날짜 년/월/일)"
          options={{ date: true, datePattern: ["Y", "m", "d"] }}
          placeholder="YYYY/MM/DD"
          isMask
          name="Date1"
          control={control}
        />
        <TextInput
          label="Date(날짜 년/월)"
          options={{ date: true, datePattern: ["m", "d"] }}
          placeholder="YYYY/MM"
          isMask
          name="Date2"
          control={control}
        />
        <TextInput
          label="Time(시간 시:분:초)"
          options={{ time: true, timePattern: ["h", "m", "s"] }}
          placeholder="HH:MM:SS"
          isMask
          name="Time1"
          control={control}
        />
        <TextInput
          label="Time(시간 시:분)"
          options={{ time: true, timePattern: ["h", "m"] }}
          placeholder="HH:MM"
          isMask
          name="Time2"
          control={control}
        />
        <TextInput
          label="Numeral Formatting(숫자)"
          options={{ numeral: true }}
          className="text-right"
          placeholder="10,000"
          isMask
          name="Numeral"
          control={control}
        />
        <TextInput
          label="Blocks"
          options={{ blocks: [4, 3, 3], uppercase: true }}
          placeholder="Block[1,4,7]"
          isMask
          name="Blocks"
          control={control}
        />
        <TextInput
          label="Delimiters"
          options={{ delimiter: "·", blocks: [3, 3, 3], uppercase: true }}
          placeholder="Delimiter: '.'"
          isMask
          name="CrediDelimiterstCard"
          control={control}
        />
        <TextInput
          label="Custom Delimiters"
          options={{
            delimiters: [".", ".", "-"],
            blocks: [3, 3, 3, 2],
            uppercase: true,
          }}
          placeholder="Delimiter: ['.', '.', '-']"
          isMask
          name="Custom"
          control={control}
        />
        <TextInput
          label="prefix"
          options={{
            prefix: "+82",
            blocks: [3, 3, 3, 4],
            uppercase: true,
          }}
          isMask
          name="prefix"
          control={control}
        />
      </div>
    );
  },
};
Mask.args = {
  ...Mask.args,
};

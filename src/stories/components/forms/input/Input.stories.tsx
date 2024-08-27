import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "../../../../components/form/TextInput";
import { useForm } from "react-hook-form";
import StringUtil from "../../../../utils/stringUtil";

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
      // validate="This is valid state."
    />
    <TextInput
      label="Invalid State"
      type="text"
      placeholder="Invalid"
      // error="This is invalid state"
    />
  </div>
);
States.args = {
  ...States.args,
};

// Mask
export const Mask: Story = {
  render: function render() {
    const {
      control,
      register,
      formState: { errors },
    } = useForm({
      mode: "onChange",
    });

    return (
      <div className="flex flex-col gap-6">
        <TextInput
          label="주민번호"
          placeholder="######-#######"
          {...register("residentNumber", {
            onChange(e) {
              e.target.value = StringUtil.ResidentNumberFormat(e.target.value);
            },
          })}
        />
        <TextInput
          label="휴대폰번호"
          placeholder="###-####-####"
          {...register("phoneNumber", {
            onChange(e) {
              e.target.value = StringUtil.PhoneNumberFormat(e.target.value);
            },
          })}
        />
        <TextInput
          label="신용카드"
          placeholder="#### #### #### ####"
          {...register("creditCard", {
            onChange(e) {
              e.target.value = StringUtil.CreditCardFormat(e.target.value);
            },
          })}
        />
      </div>
    );
  },
};
Mask.args = {
  ...Mask.args,
};

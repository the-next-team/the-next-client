import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../../../../components/checkbox/Checkbox";
import { useState } from "storybook/internal/preview-api";

const meta = {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    componentSubtitle: "체크박스",
    docs: {
      description: {
        component:
          "사용자가 하나 이상의 옵션을 선택하거나 해제할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      description: "아이디",
    },
    disabled: {
      description: "비활성화 여부",
    },
    label: {
      description: "라벨",
    },
    checked: {
      description: "선택 여부",
    },
    name: {
      description: "인풋명",
    },
    onChange: {
      description: "선택 상태 변경시 발생 이벤트",
    },
    activeClass: {
      description: "선택 상태 스타일",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "checkbox",
    checked: true,
  },
};

// Basic
export const Basic: Story = () => (
  <div className="flex flex-wrap gap-4">
    <Checkbox label="Checked" checked={true} onChange={() => {}} />
    <Checkbox label="UnChecked" checked={false} onChange={() => {}} />
  </div>
);
Basic.args = {
  ...Basic.args,
};

// Disabled
export const Disabled: Story = () => (
  <div className="flex flex-wrap gap-4">
    <Checkbox
      label="Checked disabled"
      disabled
      checked={true}
      onChange={() => {}}
    />
    <Checkbox
      label="UnChecked disabled"
      disabled
      checked={false}
      onChange={() => {}}
    />
  </div>
);
Disabled.args = {
  ...Disabled.args,
};

// Using Options Array
export const Array: Story = {
  args: {
    ...Default.args,
  },
  render: function Render(args) {
    const [selected, setSelected] = useState<
      { value: string; label: string }[]
    >([]);
    const options: { value: string; label: string }[] = [
      {
        value: "orange",
        label: "Orange",
      },
      {
        value: "apple",
        label: "Apple",
      },
      {
        value: "banana",
        label: "Banana",
      },
    ];
    return (
      <div className="space-y-4">
        {options.map((option, i) => (
          <Checkbox
            key={i}
            name="jorina"
            label={option.label}
            checked={selected.some((s) => s.value === option.value)}
            onChange={() => {
              if (selected.some((s) => s.value === option.value)) {
                setSelected(selected.filter((s) => s.value !== option.value));
              } else {
                setSelected([...selected, option]);
              }
            }}
          />
        ))}
        {selected.length > 0 && (
          <div className="text-sm text-slate-900">
            Selected: [{selected.map((e) => e.value).join(", ")}]
          </div>
        )}
      </div>
    );
  },
};

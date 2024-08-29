import type { Meta, StoryObj } from "@storybook/react";
import TextInput from "../../../../components/form/TextInput";
import FormGroup from "../../../../components/form/FormGroup";

const meta = {
  title: "Components/Forms/FormGroup",
  component: FormGroup,
  parameters: {
    layout: "centered",
    componentSubtitle: "폼 그룹",
    docs: {
      description: {
        component:
          "인풋과 함께 라벨, 유효성 및 설명 메시지를 포함할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FormGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "default",
    label: "Label Name",
    description: "form group description",
    children: <TextInput id="default" />,
  },
};

// States
export const States: Story = () => (
  <div className="flex flex-col gap-4">
    <FormGroup id="valid" label="Valid" valid="This field is required.">
      <TextInput id="valid" error="This field is required." />
    </FormGroup>
    <FormGroup id="invalid" label="Invalid" invalid="This field is valid.">
      <TextInput id="invalid" validate="This field is valid." />
    </FormGroup>
  </div>
);
States.args = {
  ...States.args,
};

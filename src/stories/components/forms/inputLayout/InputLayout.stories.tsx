import type { Meta, StoryObj } from "@storybook/react";
import InputGroup from "../../../../components/form/InputGroup";
import TextInput from "../../../../components/form/TextInput";
import Checkbox from "../../../../components/checkbox/Checkbox";
import Button from "../../../../components/button/Button";
import { useState } from "react";
import { Icon } from "@iconify/react";

const InputLayout = ({ children }: { children?: React.ReactNode }) => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex flex-col gap-4">
      {children && children}
      <div className="ml-[124px] space-y-4">
        <Checkbox
          label="Remember me"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <Button text="Submit" className="btn-dark" />
      </div>
    </div>
  );
};

const meta = {
  title: "Components/Forms/InputLayout",
  component: InputLayout,
  parameters: {
    layout: "centered",
    componentSubtitle: "인풋 레이아웃",
    docs: {
      includePrimary: true,
      description: {
        component: "다양한 form 레이아웃 예시입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Horizontal Form
export const Horizontal: Story = () => (
  <InputLayout>
    <TextInput
      label="Full name"
      id="h_Fullname"
      type="text"
      placeholder="Full name"
      horizontal
    />
    <TextInput
      label="Email"
      id="h_email"
      type="email"
      placeholder="Type your email"
      horizontal
    />
    <TextInput
      label="Phone"
      id="h_phone"
      type="phone"
      placeholder="Type your email"
      horizontal
    />
    <TextInput
      label="Password"
      id="h_password"
      type="Password"
      placeholder="8+ characters, 1 capitat letter "
      horizontal
    />
  </InputLayout>
);
Horizontal.args = {
  ...Horizontal.args,
};

// Horizontal Form With Icons
export const HorizontalWithIcons: Story = () => (
  <InputLayout>
    <InputGroup
      label="Full name"
      id="hi_Fullname"
      type="text"
      placeholder="Full name"
      horizontal
      prepend={<Icon icon="heroicons-outline:user" />}
      merged
    />
    <InputGroup
      label="Email"
      id="hi_email"
      type="email"
      placeholder="Type your email"
      prepend={<Icon icon="heroicons-outline:mail" />}
      horizontal
      merged
    />
    <InputGroup
      label="Phone"
      id="hi_phone"
      type="phone"
      placeholder="Type your email"
      prepend={<Icon icon="heroicons-outline:phone" />}
      horizontal
      merged
    />
    <InputGroup
      label="Password"
      id="hi_password"
      type="Password"
      placeholder="8+ characters, 1 capitat letter "
      prepend={<Icon icon="heroicons-outline:lock-closed" />}
      horizontal
      merged
    />
  </InputLayout>
);
HorizontalWithIcons.args = {
  ...HorizontalWithIcons.args,
};

// Vertical Form
export const Vertical: Story = () => (
  <InputLayout>
    <TextInput
      label="Full name"
      id="h_Fullname2"
      type="text"
      placeholder="Full name"
    />
    <TextInput
      label="Email"
      id="h_email2"
      type="email"
      placeholder="Type your email"
    />
    <TextInput
      label="Phone"
      id="h_phone2"
      type="phone"
      placeholder="Type your email"
    />
    <TextInput
      label="Password"
      id="h_password2"
      type="Password"
      placeholder="8+ characters, 1 capitat letter "
    />
  </InputLayout>
);
Vertical.args = {
  ...Vertical.args,
};

// Vertical Form With Icon
export const VerticalWithIcon: Story = () => (
  <InputLayout>
    <InputGroup
      label="Full name"
      id="hi_Fullname1"
      type="text"
      placeholder="Full name"
      prepend={<Icon icon="heroicons-outline:user" />}
      merged
    />
    <InputGroup
      label="Email"
      id="hi_email1"
      type="email"
      placeholder="Type your email"
      prepend={<Icon icon="heroicons-outline:mail" />}
      merged
    />
    <InputGroup
      label="Phone"
      id="hi_phone1"
      type="phone"
      placeholder="Type your email"
      prepend={<Icon icon="heroicons-outline:phone" />}
      merged
    />
    <InputGroup
      label="Password"
      id="hi_password1"
      type="Password"
      placeholder="8+ characters, 1 capitat letter "
      prepend={<Icon icon="heroicons-outline:lock-closed" />}
      merged
    />
  </InputLayout>
);
VerticalWithIcon.args = {
  ...VerticalWithIcon.args,
};

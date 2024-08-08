import type { Meta, StoryObj } from "@storybook/react";
import InputGroup from "../../../../components/form/InputGroup";
import { Icon } from "@iconify/react";
import Dropdown from "../../../../components/dropdown/Dropdown";
import Button from "../../../../components/button/Button";

const meta = {
  title: "Components/Forms/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
    componentSubtitle: "인풋 그룹",
    docs: {
      description: {
        component: "기본 Input에 다양한 옵션을 추가할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

// Basic Inputs
export const Basic: Story = () => (
  <div className="flex flex-col gap-4">
    <InputGroup
      type="text"
      prepend={<Icon icon="heroicons-outline:search" />}
    />
    <InputGroup type="text" append={<Icon icon="heroicons-outline:search" />} />
    <InputGroup
      type="text"
      append={<Icon icon="heroicons-outline:search" />}
      disabled
      placeholder="Disable Input Group"
    />
    <InputGroup
      type="text"
      prepend={<Icon icon="heroicons-outline:search" />}
      readOnly
      placeholder="Readonly Input Group"
    />
    <InputGroup
      type="text"
      label="password"
      id="ps-1"
      placeholder="Your password"
    />
    <InputGroup type="text" placeholder="Username" prepend="@" />
    <InputGroup
      type="text"
      placeholder="Recient’s username"
      append="@example.com"
    />
    <InputGroup
      type="text"
      prepend="https://example.com/users/"
      placeholder=""
    />
    <InputGroup type="text" prepend="$" placeholder="100" append="00." />
  </div>
);
Basic.args = {
  ...Basic.args,
};
Basic.storyName = "Basic Inputs";

// Sizing Options
export const Size: Story = () => (
  <div className="flex flex-col gap-4">
    <InputGroup
      label="Large"
      id="largesize"
      type="text"
      placeholder="Large Input"
      className="h-[52px]"
      prepend="@"
    />
    <InputGroup
      label="Default"
      id="defaultsize"
      type="text"
      placeholder="Default Input"
      prepend="@"
    />
    <InputGroup
      label="Small"
      id="smallsize"
      type="text"
      placeholder="Small Input"
      className="h-[32px] text-sm"
      prepend="@"
    />
  </div>
);
Size.args = {
  ...Size.args,
};
Size.storyName = "Sizing Options";

// Horizontal
export const Horizontal: Story = () => (
  <div className="flex flex-col gap-4">
    <InputGroup
      label="Large"
      id="largesize"
      type="text"
      placeholder="Large Input"
      className="h-[52px]"
      prepend="@"
      horizontal
    />
    <InputGroup
      label="Default"
      id="defaultsize"
      type="text"
      placeholder="Default Input"
      prepend="@"
      horizontal
    />
    <InputGroup
      label="Small"
      id="smallsize"
      type="text"
      placeholder="Small Input"
      className="h-[32px] text-sm"
      prepend="@"
      horizontal
    />
  </div>
);
Horizontal.args = {
  ...Horizontal.args,
};
Horizontal.storyName = "Horizontal Form Label Sizing";

// Merged
export const Merged: Story = () => (
  <div className="flex flex-col gap-4">
    <InputGroup type="text" merged />
    <InputGroup type="text" merged />
    <InputGroup
      type="text"
      label="password"
      id="ps-1"
      placeholder="Your password"
      merged
    />
    <InputGroup type="text" placeholder="Username" prepend="@" merged />
    <InputGroup
      type="text"
      placeholder="Recient’s username"
      append="@example.com"
      merged
    />
    <InputGroup
      type="text"
      prepend="https://example.com/users/"
      placeholder=""
      merged
    />
    <InputGroup type="text" prepend="$" placeholder="100" append="00." merged />
  </div>
);
Merged.args = {
  ...Merged.args,
};

// WithButtons
export const WithButtons: Story = () => (
  <div className="flex flex-col gap-4">
    <InputGroup
      type="text"
      placeholder="Button on right"
      append={<Button text="Go" className="btn-outline-dark " />}
    />
    <InputGroup
      type="text"
      placeholder="Button on both side"
      prepend={
        <Button icon="heroicons-outline:search" className="btn-outline-dark" />
      }
      append={<Button text="Search" className="btn-outline-dark" />}
    />
  </div>
);
WithButtons.args = {
  ...WithButtons.args,
};
WithButtons.storyName = "Input Groups With Buttons";

// WithDropdown
export const WithDropdown: Story = () => (
  <div className="flex flex-col gap-4">
    <InputGroup
      type="text"
      placeholder="Button on right"
      prepend={
        <Dropdown
          classMenuItems="left-0  w-[220px] top-[110%] "
          className="h-full"
          labelClass="h-full"
          label={
            <Button
              text="primary"
              className="btn-dark"
              icon="heroicons-outline:chevron-right"
              iconPosition="right"
              div
              iconClass="text-lg"
            />
          }
        />
      }
    />
    <InputGroup
      type="text"
      placeholder="Button on both side"
      prepend={
        <Dropdown
          classMenuItems="left-0  w-[220px] top-[110%] "
          className="h-full"
          labelClass="h-full"
          label={
            <button className="btn btn-outline-dark btn-sm">
              <span className="flex items-center justify-between">
                <span className="flex-1 mr-2 text-lg">
                  <Icon icon="heroicons-outline:pencil" />
                </span>
                <span className="flex-none inline-block text-base">
                  <Icon icon="heroicons-outline:chevron-right" />
                </span>
              </span>
            </button>
          }
        />
      }
      append={
        <Dropdown
          classMenuItems="right-0  w-[220px] top-[110%] "
          className="h-full"
          labelClass="h-full"
          label={
            <Button
              text="Action"
              className="btn-outline-dark btn-sm"
              icon="heroicons-outline:chevron-right"
              iconPosition="right"
              div
              iconClass="text-lg"
            />
          }
        />
      }
    />
  </div>
);
WithDropdown.args = {
  ...WithDropdown.args,
};
WithDropdown.storyName = "Input Groups With Dropdown";

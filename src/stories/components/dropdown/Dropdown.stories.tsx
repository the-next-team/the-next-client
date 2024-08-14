import type { Meta, StoryObj } from "@storybook/react";
import { HashRouter } from "react-router-dom";
import Dropdown from "../../../components/dropdown/Dropdown";
import Button from "../../../components/button/Button";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    componentSubtitle: "드롭다운",
    docs: {
      description: {
        component: "사용자가 선택할 수 있는 목록을 제공할 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    classItem: {
      description: "아이템 스타일",
    },
    className: {
      description: "스타일",
    },
    items: {
      description: "아이템 목록",
    },
    label: {
      description: "라벨",
    },
    labelClass: {
      description: "라벨 스타일",
    },
    wrapperClass: {
      description: "스타일",
    },
  },
  decorators: [
    (Story: any) => (
      <HashRouter>
        <Story />
      </HashRouter>
    ),
  ],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: <Button text="Dropdown" />,
  },
};

// Basic Dropdowns
export const BasicDropdowns: Story = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="primary"
          className="btn-primary"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="secondary"
          className="btn-secondary"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="success"
          className="btn-success"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="info"
          className="btn-info"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="warning"
          className="btn-warning"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="danger"
          className="btn-danger"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="Dark"
          className="btn-dark"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="Light"
          className="btn-light"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
  </div>
);
BasicDropdowns.args = {
  ...BasicDropdowns.args,
};

// Outline Dropdowns
export const OutlineDropdowns: Story = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="primary"
          className="btn-outline-primary"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="secondary"
          className="btn-outline-secondary"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="success"
          className="btn-outline-success"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="info"
          className="btn-outline-info"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="warning"
          className="btn-outline-warning"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="danger"
          className="btn-outline-danger"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="Dark"
          className="btn-outline-dark"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0 w-[220px] top-[110%]"
      label={
        <Button
          text="Light"
          className="btn-outline-light"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
  </div>
);
OutlineDropdowns.args = {
  ...OutlineDropdowns.args,
};

// Flat Dropdowns
export const FlatDropdowns: Story = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Dropdown
      classMenuItems="left-0  w-[220px] top-[110%] "
      label={
        <Button
          text="primary"
          className="text-primary-500 hover:bg-primary-500 hover:bg-opacity-20"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0  w-[220px] top-[110%] "
      label={
        <Button
          text="secondary"
          className="text-secondary-500 hover:bg-secondary-500 hover:bg-opacity-20"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0  w-[220px] top-[110%] "
      label={
        <Button
          text="success"
          className="text-success-500 hover:bg-success-500 hover:bg-opacity-20"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0  w-[220px] top-[110%] "
      label={
        <Button
          text="info"
          className="text-info-500 hover:bg-info-500 hover:bg-opacity-20"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0  w-[220px] top-[110%] "
      label={
        <Button
          text="warning"
          className="text-warning-500 hover:bg-warning-500 hover:bg-opacity-20"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0  w-[220px] top-[110%] "
      label={
        <Button
          text="danger"
          className=" text-danger-500 hover:bg-danger-500 hover:bg-opacity-20"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0  w-[220px] top-[110%] "
      label={
        <Button
          text="Dark"
          className="text-slate-800 hover:bg-slate-800 hover:bg-opacity-20"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
    <Dropdown
      classMenuItems="left-0  w-[220px] top-[110%] "
      label={
        <Button
          text="Light"
          className="text-slate-600 hover:bg-light hover:bg-opacity-10"
          icon="heroicons-outline:chevron-right"
        />
      }
    ></Dropdown>
  </div>
);
FlatDropdowns.args = {
  ...FlatDropdowns.args,
};

// Sizes
export const Sizes: Story = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Dropdown
      classMenuItems="left-0  w-[220px] top-[110%] "
      label={
        <Button
          text="Large Button"
          className="btn-primary btn-xl"
          icon="heroicons-outline:chevron-right"
        />
      }
    />
    <Dropdown
      classMenuItems="left-0  w-[220px] top-[110%] "
      label={
        <Button
          text="Default"
          className="btn-dark"
          icon="heroicons-outline:chevron-right"
        />
      }
    />

    <Dropdown
      classMenuItems="left-0  w-[220px] top-[110%] "
      label={
        <Button
          text="success"
          className=" btn-success btn-sm"
          icon="heroicons-outline:chevron-right"
        />
      }
    />
  </div>
);
Sizes.args = {
  ...Sizes.args,
};

// Directions
export const Directions: Story = () => (
  <div className="flex flex-wrap justify-center gap-2">
    <Dropdown
      classMenuItems="left-0  w-[220px] top-[110%]"
      label={
        <Button
          text="Left align"
          className="btn-primary"
          icon="heroicons-outline:chevron-right"
        />
      }
    />
    <Dropdown
      classMenuItems="w-[220px] top-[110%]"
      label={
        <Button
          text="Right align"
          className="btn-primary"
          icon="heroicons-outline:chevron-right"
        />
      }
    />
    <Dropdown
      classMenuItems="right-unset left-full w-[200px] top-0 ml-3"
      label={
        <Button
          text="Drop-right-top"
          className="btn-primary"
          icon="heroicons-outline:chevron-right"
        />
      }
    />
    <Dropdown
      classMenuItems="right-full  w-[200px] top-0 ml-3"
      label={
        <Button
          text="Drop-left-left"
          className="btn-primary"
          icon="heroicons-outline:chevron-left"
        />
      }
    />
  </div>
);
Directions.args = {
  ...Directions.args,
};

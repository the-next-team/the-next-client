import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "../../../components/pagination/Pagination";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    componentSubtitle: "페이지네이션",
    docs: {
      description: {
        component:
          "콘텐츠를 여러 페이지로 나누고 이전/다음 페이지 또는 특정 페이지로 이동하도록 할 때 사용합니다.",
      },
    },
  },
  argTypes: {
    currentPage: {
      description: "현재 페이지 번호",
    },
    totalPages: {
      description: "총 페이지 수",
    },
    text: {
      description: "다음/이전 페이지 버튼 텍스트 타입 여부",
    },
    className: {
      description: "스타일",
    },
    handlePageChange: {
      description: "페이지 변경시 이벤트",
    },
  },
  tags: ["autodocs"],
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {
    currentPage: 1,
    totalPages: 5,
    handlePageChange: (page) => {},
  },
};

// Basic Pagination
export const Basic: Story = () => (
  <Pagination {...Default.args} handlePageChange={() => {}} />
);
Basic.args = {
  ...Basic.args,
};

// Pagination With Background
export const WithBackground: Story = () => (
  <Pagination
    className="px-3 py-2 mx-auto rounded bg-slate-100 w-fit"
    {...Default.args}
    handlePageChange={() => {}}
  />
);
WithBackground.args = {
  ...WithBackground.args,
};

// Pagination With Text
export const WithText: Story = () => (
  <Pagination text {...Default.args} handlePageChange={() => {}} />
);
WithText.args = {
  ...WithText.args,
};

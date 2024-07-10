import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "../../../components/accordion/Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    componentSubtitle: "아코디언",
    docs: {
      description: {
        component:
          "제한된 공간에 콘텐츠나 하위 메뉴를 효율적으로 표시하고, 계층적으로 구조화하여 사용자에게 제공할 때 사용합니다.",
      },
    },
  },
  argTypes: {
    className: {
      description: "스타일",
    },
    items: {
      description: "목록 아이템",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {
    items: [
      {
        title: "첫번째 메뉴",
        content: "하위 메뉴입니다.",
      },
      {
        title: "두번째 메뉴",
        content: "하위 메뉴입니다.",
      },
      {
        title: "세번째 메뉴",
        content: "하위 메뉴입니다.",
      },
    ],
  },
};

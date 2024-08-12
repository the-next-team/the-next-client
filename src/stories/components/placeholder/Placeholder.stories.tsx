import { StoryObj } from "@storybook/react/*";
import SkeletionTable from "../../../components/skeleton/SkeletonTable";
import SkeletonListLoading from "../../../components/skeleton/SkeletonListLoading";

const meta = {
  title: "Components/Placeholder",
  component: SkeletionTable,
  parameters: {
    layout: "centered",
    componentSubtitle: "placeholder",
    docs: {
      description: {
        component:
          "문자나 이미지 등이 들어갈 자리에 임시로 채워 놓을때 사용합니다.",
      },
    },
  },
  argTypes: {
    className: {
      description: "스타일",
    },
    disabled: {
      description: "비활성화 여부",
    },
    icon: {
      description: "추가 아이콘",
    },
    text: {
      description: "placeholder 라벨",
    },
  },
  tags: ["autodocs"],
  decorators: [(Story: any) => <Story />],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: { count: 3 },
};

// Example One
export const ExampleOne: Story = () => <SkeletionTable count={3} />;
ExampleOne.args = {
  ...ExampleOne.args,
};

// Example Two
export const ExampleTwo: Story = () => <SkeletionTable count={3} />;
ExampleTwo.args = {
  ...ExampleTwo.args,
};

// Example Three
export const ExampleThree: Story = () => <SkeletonListLoading count={3} />;
ExampleThree.args = {
  ...ExampleThree.args,
};

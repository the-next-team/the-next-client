import { Meta, StoryObj } from "@storybook/react/*";
import Card from "../../../components/card/Card";
import cardImage1 from "../../../assets/images/all-img/card-1.png";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "정보를 시각적으로 구분하고 그룹화하여 사용자에게 쉽게 전달할 때 사용합니다.",
      },
    },
  },
  argTypes: {},
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Card Title",
    subtitle: "Card Subtitle",
    noborder: true,
    children: (
      <>
        <div className="h-[140px] w-full mb-6">
          <img
            src={cardImage1}
            alt=""
            className="block object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="text-sm">
          Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
          eiusmod tempor incididun ut .
        </div>
        <div className="mt-4 space-x-4 rtl:space-x-reverse">
          <a className="btn-link">Learn more</a>
          <a className="btn-link">Another link</a>
        </div>
      </>
    ),
  },
};

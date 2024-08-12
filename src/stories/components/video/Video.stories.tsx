import type { Meta, StoryObj } from "@storybook/react";
import VideoPlayer from "../../../components/video/VideoPlayer";

const meta = {
  title: "Components/Video",
  component: VideoPlayer,
  parameters: {
    layout: "centered",
    componentSubtitle: "비디오",
    docs: {
      description: {
        component: "비디오를 보여줄 때 사용합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    url: {
      description: "url 경로",
    },
    className: {
      description: "",
    },
  },
} satisfies Meta<typeof VideoPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "https://vjs.zencdn.net/v/oceans.mp4",
  },
};

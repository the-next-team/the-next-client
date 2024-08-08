import { Meta, StoryObj } from "@storybook/react";
import { IconType } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as CiIcons from "react-icons/ci";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as FiIcons from "react-icons/fi";
import * as RiIcons from "react-icons/ri";
import * as VscIcons from "react-icons/vsc";

// 아이콘 세트 컴포넌트 정의
type IconSetProps = {
  iconSet: { [key: string]: IconType };
  title: string;
};

const IconSet: React.FC<IconSetProps> = ({ iconSet, title }) => {
  const iconKeys = Object.keys(iconSet);

  return (
    <div className="py-2">
      <div className="text-4xl font-bold">{title}</div>
      <div className="grid grid-cols-4 gap-4 mt-10 lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-6">
        {iconKeys.map((iconKey) => {
          const IconComponent = iconSet[iconKey as keyof typeof iconSet] as IconType;
          return (
            <div
              key={iconKey}
              className="flex flex-col items-center gap-2 overflow-hidden"
            >
              <button className="flex items-center justify-center w-full p-4 bg-white rounded shadow-md">
                <IconComponent size={32} />
              </button>
              <div className="text-[10px]">{iconKey}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const meta: Meta = {
  title: "Foundations/Icons",
  component: IconSet,
};

export default meta;
type Story = StoryObj<typeof meta>;

// Ant Design Icons 아이콘 스토리
export const AntDesignIcons: Story = {
  args: {
    iconSet: AiIcons,
    title: "Ant Design Icons",
  },
};

// Bootstrap 아이콘 스토리
export const BootstrapIcons: Story = {
  args: {
    iconSet: BsIcons,
    title: "Bootstrap Icons",
  },
};

// Box Icons 아이콘 스토리
export const boxIcons: Story = {
  args: {
    iconSet: BiIcons,
    title: "BoxIcons",
  },
};

// Circum Icons 아이콘 스토리
export const circumIcons: Story = {
  args: {
    iconSet: CiIcons,
    title: "Circum Icons",
  },
};

// Feather 아이콘 스토리
export const FeatherIcons: Story = {
  args: {
    iconSet: FiIcons,
    title: "Feather Icons",
  },
};

// Font Awesome 5 아이콘 스토리
export const FontAwesome5Icons: Story = {
  args: {
    iconSet: FaIcons,
    title: "Font Awesome 5 Icons",
  },
};

// Font Awesome 6 아이콘 스토리
export const FontAwesome6Icons: Story = {
  args: {
    iconSet: Fa6Icons,
    title: "Font Awesome 6 Icons",
  },
};

// Remix Icon 아이콘 스토리
export const RemixIcons: Story = {
  args: {
    iconSet: RiIcons,
    title: "Remix Icon",
  },
};

// VS Code Icons 아이콘 스토리
export const VSCodeIcons: Story = {
  args: {
    iconSet: VscIcons,
    title: "VS Code Icons",
  },
};



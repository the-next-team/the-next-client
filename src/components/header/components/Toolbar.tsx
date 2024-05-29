import { Icon } from "@iconify/react";

function Toolbar() {
  const ToolMenus = [
    { icon: "heroicons:phone-16-solid" },
    { icon: "heroicons:check-circle-16-solid" },
    { icon: "heroicons:chat-bubble-left-ellipsis" },
    { icon: "heroicons:phone-x-mark-16-solid" },
    { icon: "heroicons:clock" },
    { icon: "heroicons:document-text" },
    { icon: "heroicons:cloud" },
  ];

  return (
    <div className="flex items-center h-full gap-2">
      {ToolMenus.map((menu, i) => (
        <div
          key={i}
          className={`cursor-pointer rounded-[6px] p-1 ${
            i == 0
              ? "bg-gradient-to-tl from-[#3d5af5] to-[#18afb9]"
              : "bg-custom-gray-100 bg-opacity-20"
          }`}
          onClick={() => {}}
        >
          <Icon icon={menu.icon} width="16" color="white" />
        </div>
      ))}
    </div>
  );
}

export default Toolbar;

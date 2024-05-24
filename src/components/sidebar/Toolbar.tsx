import { Icon } from "@iconify/react";

type Props = {
  selected: string;
  setSelected: (name: string) => void;
  toolMenus: Array<{
    name: string;
    icon: string;
    onClick?: () => void;
  }>;
};

function Toolbar({ selected, setSelected, toolMenus }: Props) {
  return (
    <div className="flex flex-col items-center h-full gap-2 px-2 py-3 w-11">
      {toolMenus.map((menu, i) => (
        <div key={i}>
          <div
            className={`cursor-pointer rounded-[6px] p-[6px] ${
              selected == menu.name
                ? "bg-gradient-to-br from-[#f47112] via-[#f35916] to-[#e22f55] text-white shadow-md"
                : "border border-custom-blue-100 text-custom-black"
            }`}
            onClick={() => {
              setSelected(menu.name);
              menu.onClick && menu.onClick();
            }}
          >
            <Icon icon={menu.icon} width="16" />
          </div>
          {i === 2 && (
            <div className="w-full bg-primacustom-blue-100ry h-[1px]" />
          )}
        </div>
      ))}
    </div>
  );
}

export default Toolbar;

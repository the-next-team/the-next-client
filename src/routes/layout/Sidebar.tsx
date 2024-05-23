import { Icon } from "@iconify/react";
import NavMenu from "../../components/sidebar/NavMenu";
import { TabMenuListType } from "../../states/layout/layoutAtom";

type Props = {
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
};

function Sidebar({ tabMenu, setTabMenu }: Props) {
  const ToolMenus = [
    { icon: <Icon icon="heroicons:home" width="16" /> },
    { icon: <Icon icon="heroicons:star" width="16" /> },
    {
      icon: <Icon icon="heroicons:magnifying-glass-solid" width="16" />,
    },
    {
      icon: <Icon icon="heroicons:building-library" width="16" />,
    },
    {
      icon: <Icon icon="heroicons:clipboard-document-list" width="16" />,
    },
    { icon: <Icon icon="heroicons:book-open" width="16" /> },
  ];

  return (
    <div className="flex w-[248px] h-full bg-white">
      <div className="flex flex-col items-center h-full gap-2 px-2 py-3 w-11">
        {ToolMenus.map((menu, i) => (
          <>
            <div
              className={`cursor-pointer border rounded-[6px] p-[6px] ${
                i == 3
                  ? "bg-gradient-to-r from-[#f47112] via-[#f35916] to-[#e22f55] text-white"
                  : "border-primary text-custom-black"
              }`}
              key={i}
            >
              {menu.icon}
            </div>
            {i === 2 && <div className="w-full bg-primary h-[1px]" />}
          </>
        ))}
      </div>
      <NavMenu tabMenu={tabMenu} setTabMenu={setTabMenu} />
    </div>
  );
}

export default Sidebar;

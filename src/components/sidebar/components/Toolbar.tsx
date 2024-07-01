import { Icon } from "@iconify/react";
import useTabMenu from "../../../hooks/useTabMenu";
import { useRecoilState } from "recoil";
import {
  CurrentSideMenu,
  currentSideMenuState,
} from "../../../states/sidebar/sidebarAtom";

function Toolbar() {
  const { handleTabOpen } = useTabMenu();
  const [currentSideMenu, setCurrentSideMenu] =
    useRecoilState<CurrentSideMenu>(currentSideMenuState);

  const toolMenus = [
    {
      name: "home",
      icon: "heroicons:home",
      onClick: () => {
        handleTabOpen({
          name: "대시보드",
          href: "dashboard/Dashboard",
        });
      },
    },
    {
      name: "bookmark",
      icon: "heroicons:star",
    },
    {
      name: "search",
      icon: "heroicons:magnifying-glass-solid",
    },
    {
      name: "menu",
      icon: "heroicons:building-library",
    },
    {
      name: "todo",
      icon: "heroicons:clipboard-document-list",
    },
    { name: "", icon: "heroicons:book-open" },
  ];

  return (
    <div className="flex flex-col items-center h-full gap-2 px-2 py-3 w-11">
      {toolMenus.map((menu, i) => (
        <div key={i}>
          <div
            className={`cursor-pointer rounded-[6px] p-[6px] ${
              currentSideMenu == menu.name
                ? "bg-gradient-to-br from-[#f47112] via-[#f35916] to-[#e22f55] text-white shadow-md"
                : "border border-custom-blue-100 text-custom-black"
            }`}
            onClick={() => {
              setCurrentSideMenu(menu.name);
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

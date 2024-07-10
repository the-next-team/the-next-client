import { Icon } from "@iconify/react";
import useTabMenu from "../../../hooks/useTabMenu";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  CurrentSideMenu,
  FavMenu,
  currentSideMenuState,
  favMenuState,
} from "../../../states/sidebar/sidebarAtom";

function Toolbar() {
  const { activeTab, handleTabOpen } = useTabMenu();
  const [currentSideMenu, setCurrentSideMenu] =
    useRecoilState<CurrentSideMenu>(currentSideMenuState);
  const favMenu = useRecoilValue<FavMenu>(favMenuState);

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
    {
      name: "sample",
      icon: "heroicons:rectangle-stack",
    },
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
              if (currentSideMenu == menu.name) {
                setCurrentSideMenu("");
              } else {
                setCurrentSideMenu(menu.name);
              }
              menu.onClick && menu.onClick();
            }}
          >
            <Icon icon={menu.icon} width="16" />
          </div>
        </div>
      ))}
      {favMenu.length > 0 && (
        <div className="w-full bg-custom-blue-100 h-[1px]" />
      )}
      {favMenu.map((fav, i) => (
        <div key={i} className="relative">
          <div
            className={`peer cursor-pointer rounded-[6px] p-[6px] ${
              activeTab == fav.href
                ? "bg-gradient-to-br from-[#f47112] via-[#f35916] to-[#e22f55] text-white shadow-md"
                : "border border-custom-blue-100 text-custom-black"
            }`}
            onClick={() => {
              handleTabOpen({
                name: fav.name ?? "",
                href: fav.href ?? "",
              });
            }}
          >
            <Icon icon="heroicons:book-open" width="16" />
          </div>
          <div className="absolute z-10 duration-100 -translate-y-1/2 opacity-0 pointer-events-none top-1/2 left-10 peer-hover:opacity-100">
            <div className="relative w-[100px] h-[25px] p-0 bg-[#ffe5d2] border rounded-sm after:content-none after:absolute border-[4px 8px 4px 0] block z-10 -left-2 top-2 px-2 py-0.5">
              <p className="text-sm break-keep whitespace-nowrap text-custom-black">
                {fav.name}
              </p>
            </div>
          </div>
          {/* .bubble
{
position: relative;
width: 100px;
height: 25px;
padding: 0px;
background: #FFFFFF;
-webkit-border-radius: 2px;
-moz-border-radius: 2px;
border-radius: 2px;
}

.bubble:after
{
content: '';
position: absolute;
border-style: solid;
border-width: 4px 8px 4px 0;
border-color: transparent #FFFFFF;
display: block;
width: 0;
z-index: 1;
left: -8px;
top: 8px;
} */}
        </div>
      ))}
    </div>
  );
}

export default Toolbar;

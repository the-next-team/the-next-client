import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import useMenu from "../../../hooks/useMenu";
import useTabMenu from "../../../hooks/useTabMenu";
import {
  CurrentSideMenu,
  currentSideMenuState,
} from "../../../states/sidebar/sidebarAtom";
import SubMenu from "./SubMenu";
import { IMenu } from "../../../api/services/menuService";
import TabMenuUtil from "../../../utils/tabMenuUtil";

function MainMenu() {
  const { activeTab, handleTabOpen } = useTabMenu();
  const { selectedMenu } = useMenu();
  const currentSideMenu = useRecoilValue<CurrentSideMenu>(currentSideMenuState);

  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  useEffect(() => {
    if (selectedMenu && activeTab) {
      setActiveSubmenu(findIndex(activeTab));
    }
  }, [activeTab, selectedMenu]);

  const findIndex = (link: string) => {
    let menuIndex = null;
    selectedMenu?.items.forEach((item, i) => {
      if (item.items) {
        item.items.forEach((subItem) => {
          if (
            TabMenuUtil.findURLByProgramId(subItem.programId ?? "") &&
            TabMenuUtil.findURLByProgramId(subItem.programId ?? "") === link
          ) {
            menuIndex = i;
          }
        });
      } else if (
        TabMenuUtil.findURLByProgramId(item.programId ?? "") &&
        TabMenuUtil.findURLByProgramId(item.programId ?? "") === link
      ) {
        menuIndex = i;
      }
    });
    return menuIndex;
  };

  const renderMenuItem = (item: IMenu, i: number) => {
    const isActive = activeSubmenu === i;

    return (
      <li key={i}>
        {item.items.length ? (
          <div>
            <div
              className={`cursor-pointer flex items-center transition-colors duration-100 justify-between px-4 py-2 ${
                findIndex(activeTab) === i
                  ? "bg-primary bg-opacity-[0.07]"
                  : isActive
                  ? "bg-gray-100"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => {
                if (isActive) {
                  setActiveSubmenu(null);
                } else {
                  setActiveSubmenu(i);
                }
              }}
            >
              <div className="flex items-center gap-2">
                {/* <Icon icon={item.icon ?? ""} width={16} color="#111625" /> */}
                <div className="text-sm font-medium">{item.name}</div>
              </div>
              <div className={`duration-300 ${isActive ? "rotate-90" : ""}`}>
                <Icon
                  icon="heroicons-outline:chevron-right"
                  width={16}
                  color={isActive ? "#111625" : "#8a8a8a"}
                />
              </div>
            </div>
            <SubMenu index={i} item={item} activeSubmenu={activeSubmenu} />
          </div>
        ) : (
          <div
            className={`cursor-pointer flex items-center transition-colors duration-100 justify-between px-4 py-2 ${
              TabMenuUtil.findURLByProgramId(item.programId ?? "") &&
              TabMenuUtil.findURLByProgramId(item.programId ?? "") === activeTab
                ? "bg-primary bg-opacity-[0.07]"
                : "hover:bg-gray-100"
            }`}
            onClick={() => {
              setActiveSubmenu(i);

              let href =
                TabMenuUtil.findURLByProgramId(item.programId ?? "") ?? "";
              handleTabOpen({
                name: item.name ?? "",
                href: href,
                component: TabMenuUtil.findElement(href) ?? null,
              });
            }}
          >
            <div className="flex items-center gap-2">
              {/* <Icon icon={item.icon ?? ""} width={16} color="#111625" /> */}
              <div className="text-sm font-medium">{item.name}</div>
            </div>
          </div>
        )}
      </li>
    );
  };

  return (
    <div
      className={`w-[215px] h-full overflow-y-auto shadow-md ${
        currentSideMenu === "menu" ? "block" : "hidden pointer-events-none"
      }`}
    >
      <ul>{selectedMenu?.items.map((item, i) => renderMenuItem(item, i))}</ul>
    </div>
  );
}

export default MainMenu;

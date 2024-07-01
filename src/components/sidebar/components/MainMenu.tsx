import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import useMenu from "../../../hooks/useMenu";
import useTabMenu from "../../../hooks/useTabMenu";
import {
  CurrentSideMenu,
  activeSubmenu,
  activeSubmenuState,
  currentSideMenuState,
} from "../../../states/sidebar/sidebarAtom";
import SubMenu from "./SubMenu";
import { IMenu } from "../../../api/services/menuService";

function MainMenu() {
  const { activeTab, handleTabOpen } = useTabMenu();
  const { menus, selectedMenu, setSelectedMenu } = useMenu();
  const currentSideMenu = useRecoilValue<CurrentSideMenu>(currentSideMenuState);
  const [activeSubmenu, setActiveSubmenu] =
    useRecoilState<activeSubmenu>(activeSubmenuState); // 열린 메뉴

  useEffect(() => {
    if (selectedMenu?.code) {
      let menuIndex = findMenuIndex(selectedMenu?.items, activeTab);
      if (activeSubmenu !== menuIndex) {
        setActiveSubmenu(menuIndex);
      }
    }
  }, [activeTab, selectedMenu]);

  useEffect(() => {
    let menuIndex = findMenuIndex(menus, activeTab);
    if (menuIndex != null && selectedMenu?.code !== menus[menuIndex].code) {
      console.log(menus[menuIndex].code);
      setSelectedMenu(menus[menuIndex]);
    }
  }, [activeTab]);

  const findMenuIndex = (menu: IMenu[] | undefined, link: string) => {
    let menuIndex = null;
    menu?.forEach((item, i) => {
      if (item.items) {
        item.items.forEach((subItem) => {
          if (subItem.items) {
            subItem.items.forEach((nestedItem) => {
              if (nestedItem.url === link) {
                menuIndex = i;
              }
            });
          } else if (subItem.url === link) {
            menuIndex = i;
          }
        });
      } else if (item.url === link) {
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
                findMenuIndex(selectedMenu?.items, activeTab) === i
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
              item.url && item.url === activeTab
                ? "bg-primary bg-opacity-[0.07]"
                : "hover:bg-gray-100"
            }`}
            onClick={() => {
              setActiveSubmenu(i);
              handleTabOpen({
                name: item.name ?? "",
                href: item.url ?? "",
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

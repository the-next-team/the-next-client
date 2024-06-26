import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { MenuItemType, menuItems } from "../../../constants/data";
import useMenu from "../../../hooks/useMenu";
import useTabMenu from "../../../hooks/useTabMenu";
import {
  CurrentSideMenu,
  currentSideMenuState,
} from "../../../states/sidebar/sidebarAtom";
import SubMenu from "./SubMenu";

function MainMenu() {
  const { activeTab, handleTabOpen } = useTabMenu();
  const { selectedMenu } = useMenu();
  const currentSideMenu = useRecoilValue<CurrentSideMenu>(currentSideMenuState);

  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [activeMultiMenu, setActiveMultiMenu] = useState<number | null>(null);

  useEffect(() => {
    let menuIndex = findIndex(activeTab);
    setActiveSubmenu(menuIndex.submenuIndex);
    setActiveMultiMenu(menuIndex.multiMenuIndex);
  }, [activeTab]);

  const findIndex = (link: string) => {
    let menuIndex: {
      submenuIndex: null | number;
      multiMenuIndex: null | number;
    } = {
      submenuIndex: null,
      multiMenuIndex: null,
    };
    if (link) {
      menuItems.forEach((item, i) => {
        if (item.child) {
          item.child.forEach((childItem, j) => {
            if (childItem.multi_menu) {
              childItem.multi_menu.forEach((nestedItem) => {
                if (nestedItem.multiLink === link) {
                  menuIndex.submenuIndex = i;
                  menuIndex.multiMenuIndex = j;
                }
              });
            } else if (childItem.childlink === link) {
              menuIndex.submenuIndex = i;
            }
          });
        } else if (item.link === link) {
          menuIndex.submenuIndex = i;
        }
      });
    }
    return menuIndex;
  };

  const renderMenuItem = (item: MenuItemType, i: number) => {
    return (
      <li key={i} className="">
        {/* 라벨 */}
        {item.isHeadr && !item.child && (
          <div className="mt-4 mb-4 text-xs font-semibold uppercase text-custom-black">
            {item.title}
          </div>
        )}
        {/* 하위메뉴 X */}
        {!item.child && !item.isHeadr && (
          <div
            className={`cursor-pointer flex items-center justify-between px-4 py-2 ${
              item.link && item.link === activeTab
                ? "bg-primary bg-opacity-[0.07]"
                : "hover:bg-gray-100"
            }`}
            onClick={() => {
              setActiveSubmenu(i);
              setActiveMultiMenu(null); // 멀티메뉴 초기화
              handleTabOpen({
                name: item.title ?? "",
                href: item.link ?? "",
                component: item.element ?? null,
              });
            }}
          >
            <div className="flex items-center gap-2">
              <Icon icon={item.icon ?? ""} width={16} color="#111625" />
              <div className="text-sm font-medium">{item.title}</div>
            </div>
          </div>
        )}
        {/* 하위메뉴 O */}
        {item.child && (
          <div>
            <div
              className={`cursor-pointer flex items-center duration-100 justify-between px-4 py-2 ${
                findIndex(activeTab).submenuIndex === i
                  ? "bg-primary bg-opacity-[0.07]"
                  : activeSubmenu === i
                  ? "bg-gray-100"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => {
                if (activeSubmenu === i) {
                  setActiveSubmenu(null);
                } else {
                  setActiveSubmenu(i);
                }
                setActiveMultiMenu(null); // 멀티메뉴 초기화
              }}
            >
              <div className="flex items-center gap-2">
                <Icon icon={item.icon ?? ""} width={16} color="#111625" />
                <div className="text-sm font-medium">{item.title}</div>
              </div>
              <div
                className={`duration-300 ${
                  activeSubmenu === i ? "rotate-90" : ""
                }`}
              >
                <Icon
                  icon="heroicons-outline:chevron-right"
                  width={16}
                  color={activeSubmenu === i ? "#111625" : "#8a8a8a"}
                />
              </div>
            </div>
            <SubMenu
              index={i}
              item={item}
              activeSubmenu={activeSubmenu}
              activeMultiMenu={activeMultiMenu}
              setActiveMultiMenu={setActiveMultiMenu}
              findIndex={findIndex}
            />
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
      <ul>
        {selectedMenu?.items.map((item, index) => {
          return (
            <li key={index}>
              <div>
                <div
                  className={`cursor-pointer flex items-center duration-100 justify-between px-4 py-2 ${
                    findIndex(activeTab).submenuIndex === index
                      ? "bg-primary bg-opacity-[0.07]"
                      : activeSubmenu === index
                      ? "bg-gray-100"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    if (activeSubmenu === index) {
                      setActiveSubmenu(null);
                    } else {
                      setActiveSubmenu(index);
                    }
                    setActiveMultiMenu(null); // 멀티메뉴 초기화
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Icon icon={""} width={16} color="#111625" />
                    <div className="text-sm font-medium">{item.name}</div>
                  </div>
                  <div
                    className={`duration-300 ${
                      activeSubmenu === index ? "rotate-90" : ""
                    }`}
                  >
                    <Icon
                      icon="heroicons-outline:chevron-right"
                      width={16}
                      color={activeSubmenu === index ? "#111625" : "#8a8a8a"}
                    />
                  </div>
                </div>
                <div
                  className={`${activeSubmenu === index ? "block" : "hidden"}`}
                >
                  <ul className="flex flex-col py-1">
                    {item.items?.map((subItem, j) => {
                      return (
                        <div
                          key={j}
                          className="px-4 cursor-pointer py-1.5 duration-100 hover:bg-gray-50"
                          onClick={() => {
                            setActiveMultiMenu(j);
                            handleTabOpen({
                              name: subItem.name ?? "",
                              href: subItem.url ?? "",
                              component: null,
                            });
                          }}
                        >
                          <p
                            className={`${
                              subItem.url && activeTab === subItem.url
                                ? "text-primary"
                                : "text-custom-black"
                            } text-sm`}
                          >
                            {subItem.name}
                          </p>
                        </div>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MainMenu;

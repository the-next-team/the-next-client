import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { menuItems } from "../../constants/data";
import useTabMenu from "../../hooks/useTabMenu";
import { TabMenuListType } from "../../states/layout/layoutAtom";
import SubMenu from "./SubMenu";

type Props = {
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
  selected: string;
};

function NavMenu({ tabMenu, setTabMenu, selected }: Props) {
  const { activeTab, handleTabOpen } = useTabMenu();
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null); // 현재 선택된 Submenu
  const [activeMultiMenu, setMultiMenu] = useState<number | null>(null); // 현재 선택된 MultiMenu

  useEffect(() => {
    // 현재 탭이 변경 될때마다 해당하는 메뉴 열림
    findIndex(activeTab);
  }, [activeTab]);

  useEffect(() => {
    // 서브메뉴가 변경될 때마다 멀티메뉴 초기화
    setMultiMenu(null);
  }, [activeSubmenu]);

  const toggleSubmenu = (index: number) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  const findIndex = (link: string) => {
    let submenuIndex = null;
    let multiMenuIndex = null;
    if (link) {
      menuItems.forEach((item, i) => {
        if (item.child) {
          item.child.forEach((childItem, j) => {
            if (childItem.multi_menu) {
              childItem.multi_menu.forEach((nestedItem) => {
                if (nestedItem.multiLink === link) {
                  submenuIndex = i;
                  multiMenuIndex = j;
                }
              });
            } else if (childItem.childlink === link) {
              submenuIndex = i;
            }
          });
        } else if (item.link === link) {
          submenuIndex = i;
        }
      });
    }
    setActiveSubmenu(submenuIndex);
    setMultiMenu(multiMenuIndex);
  };

  return (
    <div
      className={`w-[215px] h-full overflow-y-auto shadow-md ${
        selected === "menu" ? "block" : "hidden pointer-events-none"
      }`}
    >
      <ul>
        {menuItems.map((item, i) => (
          <li key={i} className="">
            {/* 라벨일 경우 */}
            {item.isHeadr && !item.child && (
              <div className="mt-4 mb-4 text-xs font-semibold uppercase text-slate-800 ">
                {item.title}
              </div>
            )}
            {/* 하위메뉴가 없는 싱글메뉴일 경우 */}
            {!item.child && !item.isHeadr && (
              <div
                className="cursor-pointer menu-link bg-black-500"
                onClick={() => {
                  handleTabOpen(tabMenu, setTabMenu, {
                    name: item.title ?? "",
                    href: item.link ?? "",
                    component: item.element ?? null,
                  });
                }}
              >
                <span className="inline-flex items-center flex-grow-0 mr-3 text-lg icon-box text-slate-600">
                  <Icon icon={item.icon ?? ""} />
                </span>
                <div className="flex-grow text-slate-700">{item.title}</div>
                {item.badge && (
                  <span className="py-1 px-2 text-xs capitalize font-semibold rounded-[.358rem] whitespace-nowrap align-baseline inline-flex bg-slate-900 text-slate-50">
                    {item.badge}
                  </span>
                )}
              </div>
            )}
            {/* 하위메뉴가 존재할 경우 */}
            {item.child && (
              <div>
                <div
                  className={`cursor-pointer flex items-center justify-between px-4 py-2 ${
                    activeSubmenu === i ? "bg-primary bg-opacity-[0.07]" : ""
                  }`}
                  onClick={() => toggleSubmenu(i)}
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
                      color="#111625"
                    />
                  </div>
                </div>
                <SubMenu
                  index={i}
                  item={item}
                  setMultiMenu={setMultiMenu}
                  activeSubmenu={activeSubmenu}
                  activeMultiMenu={activeMultiMenu}
                  tabMenu={tabMenu}
                  setTabMenu={setTabMenu}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavMenu;

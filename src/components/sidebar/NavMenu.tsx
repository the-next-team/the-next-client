import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { menuItems } from "../../constants/data";
import useTabMenu from "../../hooks/useTabMenu";
import { TabMenuListType } from "../../states/layout/layoutAtom";
import SubMenu from "./SubMenu";

type Props = {
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
};

function NavMenu({ tabMenu, setTabMenu }: Props) {
  const { activeTab, handleTabOpen } = useTabMenu();
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null); // 현재 선택된 Submenu
  const [activeMultiMenu, setMultiMenu] = useState<number | null>(null); // 현재 선택된 MultiMenu

  useEffect(() => {
    // 현재 탭이 변경 될때마다 해당하는 메뉴 열림
    findIndex(activeTab);
  }, [activeTab]);

  const toggleSubmenu = (index: number) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  const toggleMultiMenu = (index: number) => {
    if (activeMultiMenu === index) {
      setMultiMenu(null);
    } else {
      setMultiMenu(index);
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
    <div className="w-full h-full overflow-y-auto shadow-md">
      <ul>
        {menuItems.map((item, i) => (
          <li key={i} className="">
            {/* single menu with no childred */}
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
            {/* only for menulabel */}
            {item.isHeadr && !item.child && (
              <div className="mt-4 mb-4 text-xs font-semibold uppercase text-slate-800 ">
                {item.title}
              </div>
            )}
            {/* !!sub menu parent */}
            {item.child && (
              <div
                className={`cursor-pointer flex items-center justify-between px-4 py-2 ${
                  activeSubmenu === i ? "bg-[#f47213] bg-opacity-[0.07]" : ""
                }`}
                onClick={() => toggleSubmenu(i)}
              >
                <div className="flex items-center gap-2">
                  <Icon icon={item.icon ?? ""} width={16} height={16} />
                  <div className="text-sm font-medium">{item.title}</div>
                </div>
                <Icon
                  icon="heroicons-outline:chevron-right"
                  className={`duration-300 ${
                    activeSubmenu === i ? "rotate-90" : ""
                  }`}
                />
              </div>
            )}
            <SubMenu
              activeSubmenu={activeSubmenu}
              item={item}
              index={i}
              toggleMultiMenu={toggleMultiMenu}
              activeMultiMenu={activeMultiMenu}
              tabMenu={tabMenu}
              setTabMenu={setTabMenu}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavMenu;

import { useEffect, useState } from "react";
import { MenuItemType } from "../../constants/data";
import { Icon } from "@iconify/react";
import SubMenu from "./SubMenu";
import { TabMenuListType } from "../../states/layout/layoutAtom";
import useTabMenu from "../../hooks/useTabMenu";

type Props = {
  menus: MenuItemType[];
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
};

function NavMenu({ menus, tabMenu, setTabMenu }: Props) {
  const { activeTab, handleTabOpen } = useTabMenu();
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(index);
    }
  };

  const [activeMultiMenu, setMultiMenu] = useState<number | null>(null);

  const toggleMultiMenu = (index: number) => {
    if (activeMultiMenu === index) {
      setMultiMenu(null);
    } else {
      setMultiMenu(index);
    }
  };

  const isLocationMatch = (targetLocation: string | undefined) => {
    if (targetLocation) {
      return (
        activeTab === targetLocation ||
        activeTab.startsWith(`${targetLocation}/`)
      );
    }

    return false;
  };

  useEffect(() => {
    let submenuIndex = null;
    let multiMenuIndex = null;
    menus.forEach((item, i) => {
      if (isLocationMatch(item.link)) {
        submenuIndex = i;
      }

      if (item.child) {
        item.child.forEach((childItem, j) => {
          if (isLocationMatch(childItem.childlink)) {
            submenuIndex = i;
          }

          if (childItem.multi_menu) {
            childItem.multi_menu.forEach((nestedItem) => {
              if (isLocationMatch(nestedItem.multiLink)) {
                submenuIndex = i;
                multiMenuIndex = j;
              }
            });
          }
        });
      }
    });
    document.title = `리테일금융시스템 | ${activeTab}`;

    setActiveSubmenu(submenuIndex);
    setMultiMenu(multiMenuIndex);
    // dispatch(toggleActiveChat(false));
  }, [activeTab]);

  return (
    <ul>
      {menus.map((item, i) => (
        <li
          key={i}
          className={` 
        ${item.child ? "item-has-children" : ""}
        ${activeSubmenu === i ? "open" : ""}
        ${activeTab === item.link ? "menu-item-active" : ""}`}
        >
          {/* single menu with no childred */}
          {!item.child && !item.isHeadr && (
            <div
              className="menu-link"
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
            <div className="mt-4 mb-4 text-xs font-semibold uppercase text-slate-800">
              {item.title}
            </div>
          )}
          {/*    !!sub menu parent   */}
          {item.child && (
            <div
              className={`flex text-slate-600 font-medium text-sm capitalize px-[10px] py-1 rounded-[4px] cursor-pointer ${
                activeSubmenu === i
                  ? "bg-secondary-500 bg-opacity-20"
                  : "collapsed"
              }`}
              onClick={() => toggleSubmenu(i)}
            >
              <div className="flex items-start flex-1">
                <span className="menu-icon">
                  <Icon icon={item.icon ?? ""} />
                </span>
                <div className="text-box">{item.title}</div>
              </div>
              <div className="flex-0">
                <div
                  className={`menu-arrow transform transition-all duration-300 ${
                    activeSubmenu === i ? " rotate-90" : ""
                  }`}
                >
                  <Icon icon="heroicons-outline:chevron-right" />
                </div>
              </div>
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
  );
}

export default NavMenu;

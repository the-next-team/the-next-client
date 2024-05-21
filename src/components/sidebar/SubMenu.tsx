import { MenuItemType } from "../../constants/data";
import useTabMenu from "../../hooks/useTabMenu";
import { TabMenuListType } from "../../states/layout/layoutAtom";
import Multilevel from "./Multilevel";
import { Icon } from "@iconify/react";

type Props = {
  activeSubmenu: number | null;
  item: MenuItemType;
  index: number;
  toggleMultiMenu: (index: number) => void;
  activeMultiMenu: number | null;
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
};

function SubMenu({
  activeSubmenu,
  item,
  index,
  toggleMultiMenu,
  activeMultiMenu,
  tabMenu,
  setTabMenu,
}: Props) {
  const { activeTab, handleTabOpen } = useTabMenu();

  return (
    <div className={`${activeSubmenu === index ? "block" : "hidden"}`}>
      <ul className="space-y-2">
        {item.child?.map((subItem, j) => (
          <li key={j} className="block pl-4 pr-1 first:pt-2 last:pb-2">
            {subItem?.multi_menu ? (
              <div>
                <div
                  onClick={() => toggleMultiMenu(j)}
                  className={`${
                    activeMultiMenu
                      ? "text-black font-medium"
                      : "text-slate-600"
                  } text-sm flex space-x-3 items-center transition-all duration-150 cursor-pointer`}
                >
                  <span
                    className={`${
                      activeMultiMenu === j
                        ? "bg-slate-900 ring-4 ring-opacity-[15%] ring-black-500"
                        : ""
                    } h-2 w-2 rounded-full border border-slate-600 inline-block flex-none`}
                  ></span>
                  <span className="flex-1">{subItem.childtitle}</span>
                  <span className="flex-none">
                    <span
                      className={`menu-arrow transform transition-all duration-300 ${
                        activeMultiMenu === j ? "rotate-90" : ""
                      }`}
                    >
                      <Icon icon="ph:caret-right" />
                    </span>
                  </span>
                </div>
                <Multilevel
                  activeMultiMenu={activeMultiMenu}
                  j={j}
                  subItem={subItem}
                  tabMenu={tabMenu}
                  setTabMenu={setTabMenu}
                />
              </div>
            ) : (
              <div
                onClick={() => {
                  handleTabOpen(tabMenu, setTabMenu, {
                    name: subItem.childtitle ?? "",
                    href: subItem.childlink ?? "",
                    component: subItem.childElement ?? null,
                  });
                }}
              >
                <span
                  className={`${
                    subItem.childlink === activeTab
                      ? "text-black font-medium"
                      : "text-slate-600"
                  } text-sm flex space-x-3 items-center transition-all duration-150 cursor-pointer`}
                >
                  <span
                    className={`${
                      subItem.childlink === activeTab
                        ? "bg-slate-900 ring-4 ring-opacity-[15%] ring-black-500"
                        : ""
                    } h-2 w-2 rounded-full border border-slate-600 inline-block flex-none`}
                  ></span>
                  <span className="flex-1">{subItem.childtitle}</span>
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubMenu;

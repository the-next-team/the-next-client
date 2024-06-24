import { Icon } from "@iconify/react";
import { MenuItemChildType, MenuItemType } from "../../../constants/data";
import useTabMenu from "../../../hooks/useTabMenu";
import NestedMenu from "./NestedMenu";

type Props = {
  index: number;
  item: MenuItemType;
  activeSubmenu: number | null;
  activeMultiMenu: number | null;
  setActiveMultiMenu: (index: number | null) => void;
  findIndex: (link: string) => {
    submenuIndex: null | number;
    multiMenuIndex: null | number;
  };
};

function SubMenu({
  index,
  item,
  activeSubmenu,
  activeMultiMenu,
  setActiveMultiMenu,
  findIndex,
}: Props) {
  const { activeTab, handleTabOpen } = useTabMenu();

  const renderSubItem = (subItem: MenuItemChildType, j: number) => {
    return (
      <li key={j}>
        {subItem?.multi_menu ? (
          <div>
            <div
              className="relative flex items-center justify-between px-4 cursor-pointer"
              onClick={() => {
                if (activeMultiMenu === j) {
                  setActiveMultiMenu(null);
                } else {
                  setActiveMultiMenu(j);
                }
              }}
            >
              <div className="relative w-fit">
                <p
                  className={`${
                    (findIndex(activeTab).submenuIndex === index &&
                      findIndex(activeTab).multiMenuIndex === j) ||
                    activeMultiMenu === j
                      ? "font-medium"
                      : "font-normal"
                  } text-sm text-custom-black`}
                >
                  {subItem.childtitle}
                </p>
                {(findIndex(activeTab).submenuIndex === index &&
                  findIndex(activeTab).multiMenuIndex === j) ||
                activeMultiMenu === j ? (
                  <div className="absolute top-0.5 w-1 h-1 rounded-full -right-1.5 bg-primary" />
                ) : (
                  <></>
                )}
              </div>
              <div
                className={`duration-300 ${
                  activeMultiMenu === j ? "rotate-90" : ""
                }`}
              >
                <Icon
                  icon="heroicons-outline:chevron-right"
                  width={16}
                  color="#111625"
                />
              </div>
            </div>
            <NestedMenu
              j={j}
              subItem={subItem}
              activeMultiMenu={activeMultiMenu}
            />
          </div>
        ) : (
          <div
            className="px-4 cursor-pointer"
            onClick={() => {
              setActiveMultiMenu(j);
              handleTabOpen({
                name: subItem.childtitle ?? "",
                href: subItem.childlink ?? "",
                component: subItem.childElement ?? null,
              });
            }}
          >
            <p
              className={`${
                subItem.childlink && activeTab === subItem.childlink
                  ? "text-primary"
                  : "text-custom-black"
              } text-sm`}
            >
              {subItem.childtitle}
            </p>
          </div>
        )}
      </li>
    );
  };

  return (
    <div className={`${activeSubmenu === index ? "block" : "hidden"}`}>
      <ul className="flex flex-col gap-3 py-2">
        {item.child?.map((subItem, j) => renderSubItem(subItem, j))}
      </ul>
    </div>
  );
}

export default SubMenu;

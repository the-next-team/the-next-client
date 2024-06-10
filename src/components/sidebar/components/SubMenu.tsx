import { MenuItemType } from "../../../constants/data";
import useTabMenu from "../../../hooks/useTabMenu";
import { TabMenuList } from "../../../states/layout/layoutAtom";
import Multilevel from "./Multilevel";

type Props = {
  activeSubmenu: number | null;
  item: MenuItemType;
  index: number;
  setMultiMenu: (index: number | null) => void;
  activeMultiMenu: number | null;
  tabMenu: TabMenuList;
  setTabMenu: (tabMenu: TabMenuList) => void;
};

function SubMenu({
  activeSubmenu,
  item,
  index,
  setMultiMenu,
  activeMultiMenu,
  tabMenu,
  setTabMenu,
}: Props) {
  const { activeTab, handleTabOpen } = useTabMenu();

  const toggleMultiMenu = (index: number) => {
    if (activeMultiMenu === index) {
      setMultiMenu(null);
    } else {
      setMultiMenu(index);
    }
  };

  return (
    <div className={`${activeSubmenu === index ? "block" : "hidden"}`}>
      <ul className="flex flex-col gap-3 py-2">
        {item.child?.map((subItem, j) => (
          <li key={j}>
            {subItem?.multi_menu ? (
              <div>
                <div
                  className="relative px-4 cursor-pointer"
                  onClick={() => toggleMultiMenu(j)}
                >
                  <div className="relative w-fit">
                    <p
                      className={`${
                        activeMultiMenu === j ? "font-medium" : "font-normal"
                      } text-sm text-custom-black`}
                    >
                      {`- ${subItem.childtitle}`}
                    </p>
                    {activeMultiMenu === j && (
                      <div className="absolute top-0.5 w-1 h-1 rounded-full -right-1.5 bg-primary" />
                    )}
                  </div>
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
                className="px-4 cursor-pointer"
                onClick={() => {
                  handleTabOpen(tabMenu, setTabMenu, {
                    name: subItem.childtitle ?? "",
                    href: subItem.childlink ?? "",
                    component: subItem.childElement ?? null,
                  });
                }}
              >
                <div className="relative w-fit">
                  <p
                    className={`${
                      subItem.childlink && subItem.childlink === activeTab
                        ? "font-medium"
                        : "font-normal"
                    } text-sm text-custom-black`}
                  >{`- ${subItem.childtitle}`}</p>
                  {subItem.childlink && subItem.childlink === activeTab && (
                    <div className="absolute top-0.5 w-1 h-1 rounded-full -right-1.5 bg-primary" />
                  )}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubMenu;

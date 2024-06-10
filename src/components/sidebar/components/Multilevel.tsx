import { MenuItemChildType } from "../../../constants/data";
import useTabMenu from "../../../hooks/useTabLayout";
import { TabMenuListType } from "../../../states/layout/layoutAtom";

const Multilevel = ({
  activeMultiMenu,
  j,
  subItem,
  tabMenu,
  setTabMenu,
}: {
  subItem: MenuItemChildType;
  j: number;
  activeMultiMenu: number | null;
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
}) => {
  const { activeTab } = useTabMenu();
  const { handleTabOpen } = useTabMenu();

  return (
    <div className={`${activeMultiMenu === j ? "block" : "hidden"}`}>
      <ul className="flex flex-col gap-2 py-2">
        {subItem?.multi_menu?.map((item, i) => (
          <li
            key={i}
            className="pl-8 pr-4 cursor-pointer"
            onClick={() => {
              handleTabOpen(tabMenu, setTabMenu, {
                name: item.multiTitle,
                href: item.multiLink,
                component: item.multiElement ?? null,
              });
            }}
          >
            <p
              className={`${
                item.multiLink && item.multiLink === activeTab
                  ? "text-primary"
                  : "text-custom-gray-200"
              } text-sm text-custom-black`}
            >
              {item.multiTitle}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Multilevel;

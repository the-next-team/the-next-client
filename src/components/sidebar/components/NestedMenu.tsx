import {
  MenuItemChildMultiType,
  MenuItemChildType,
} from "../../../constants/data";
import useTabMenu from "../../../hooks/useTabMenu";

const NestedMenu = ({
  j,
  subItem,
  activeMultiMenu,
}: {
  j: number;
  subItem: MenuItemChildType;
  activeMultiMenu: number | null;
}) => {
  const { activeTab, handleTabOpen } = useTabMenu();

  const renderMenuItem = (item: MenuItemChildMultiType, i: number) => {
    return (
      <li
        key={i}
        className="pl-8 pr-4 cursor-pointer"
        onClick={() => {
          handleTabOpen({
            name: item.multiTitle,
            href: item.multiLink,
          });
        }}
      >
        <p
          className={`${
            item.multiLink && item.multiLink === activeTab
              ? "text-primary"
              : "text-custom-gray-200"
          } text-sm`}
        >
          {item.multiTitle}
        </p>
      </li>
    );
  };

  return (
    <div className={`${activeMultiMenu === j ? "block" : "hidden"}`}>
      <ul className="flex flex-col gap-2 py-2">
        {subItem?.multi_menu?.map((item, i) => renderMenuItem(item, i))}
      </ul>
    </div>
  );
};

export default NestedMenu;

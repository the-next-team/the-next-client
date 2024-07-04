import useTabMenu from "../../../hooks/useTabMenu";
import { IMenu } from "../../../api/services/menuService";

type Props = {
  index: number;
  item: IMenu;
  activeSubmenu: number | null;
};

function SubMenu({ index, item, activeSubmenu }: Props) {
  const { activeTab, handleTabOpen } = useTabMenu();

  const renderSubItem = (subItem: IMenu, j: number) => {
    return (
      <li key={j}>
        <div
          className="px-4 cursor-pointer py-1.5 transition-colors duration-100 hover:bg-gray-50"
          onClick={() => {
            handleTabOpen({
              name: subItem.name ?? "",
              href: subItem.url ?? "",
            });
          }}
        >
          <p
            className={`${
              subItem.url && subItem.url === activeTab
                ? "text-primary"
                : "text-custom-black"
            } text-sm`}
          >
            {`∙ ${subItem.name}`}
          </p>
        </div>
      </li>
    );
  };

  return (
    <div className={`${activeSubmenu === index ? "block" : "hidden"}`}>
      <ul className="flex flex-col py-1">
        {item.items?.map((subItem, j) => renderSubItem(subItem, j))}
      </ul>
    </div>
  );
}

export default SubMenu;

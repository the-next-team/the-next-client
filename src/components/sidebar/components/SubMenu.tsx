import useTabMenu from "../../../hooks/useTabMenu";
import { IMenu } from "../../../api/services/menuService";
import TabMenuUtil from "../../../utils/tabMenuUtil";

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
            let href =
              TabMenuUtil.findURLByProgramId(subItem.programId ?? "") ?? "";
            handleTabOpen({
              name: subItem.name ?? "",
              href: href,
              component: TabMenuUtil.findElement(href) ?? null,
            });
          }}
        >
          <p
            className={`${
              TabMenuUtil.findURLByProgramId(subItem.programId ?? "") &&
              TabMenuUtil.findURLByProgramId(subItem.programId ?? "") ===
                activeTab
                ? "text-primary"
                : "text-custom-black"
            } text-sm`}
          >
            {subItem.name}
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

import useTabMenu from "../../../hooks/useTabMenu";
import { IMenu } from "../../../api/services/menuService";
import useMenu from "../../../hooks/useMenu";

type Props = {
  index: number;
  item: IMenu;
  activeSubmenu: number | null;
};

function SubMenu({ index, item, activeSubmenu }: Props) {
  const { activeTab, handleTabOpen } = useTabMenu();
  const { menus } = useMenu();

  const findURLByProgramId = (programId: string) => {
    let url = null;
    menus.forEach((item) => {
      if (item.items) {
        item.items.forEach((i) => {
          if (i.items) {
            i.items.forEach((m) => {
              if (m.programId === programId) {
                url = m.url;
              }
            });
          } else if (i.programId === programId) {
            url = i.url;
          }
        });
      } else if (item.programId === programId) {
        url = item.url;
      }
    });
    return url;
  };

  const renderSubItem = (subItem: IMenu, j: number) => {
    return (
      <li key={j}>
        <div
          className="px-4 cursor-pointer py-1.5 transition-colors duration-100 hover:bg-gray-50"
          onClick={() => {
            let href = findURLByProgramId(subItem.programId ?? "") ?? "";
            handleTabOpen({
              name: subItem.name ?? "",
              href: href,
            });
          }}
        >
          <p
            className={`${
              findURLByProgramId(subItem.programId ?? "") &&
              findURLByProgramId(subItem.programId ?? "") === activeTab
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

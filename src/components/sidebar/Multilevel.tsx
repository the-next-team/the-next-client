import {
  MenuItemChildMultiType,
  MenuItemChildType,
} from "../../constants/data";
import useTabMenu from "../../hooks/useTabMenu";
import { TabMenuListType } from "../../states/layout/layoutAtom";

const LockLink = ({
  children,
  item,
  tabMenu,
  setTabMenu,
}: {
  children: React.ReactNode;
  item: MenuItemChildMultiType;
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
}) => {
  const { multiTitle, badge, multiLink, multiElement } = item;
  const { handleTabOpen } = useTabMenu();

  return (
    <>
      {item.badge ? (
        <span
          className={`text-slate-600 opacity-50 text-sm flex space-x-3 items-center cursor-pointer`}
          onClick={() => {
            handleTabOpen(tabMenu, setTabMenu, {
              name: multiTitle,
              href: multiLink,
              component: multiElement ?? null,
            });
          }}
        >
          <span className="flex-none inline-block w-2 h-2 border rounded-full border-slate-600"></span>
          <span className="flex flex-1 space-x-2 truncate">
            <span className="truncate grow">{multiTitle}</span>
            <span className="grow-0">
              {/* <Badge className="bg-slate-900 px-2 py-[3px]  font-normal text-xs rounded-full text-slate-100  capitalize">
                {badge}
              </Badge> */}
            </span>
          </span>
        </span>
      ) : (
        <div
          className="cursor-pointer"
          onClick={() => {
            handleTabOpen(tabMenu, setTabMenu, {
              name: multiTitle,
              href: multiLink,
              component: multiElement ?? null,
            });
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};

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

  return (
    <div className={`${activeMultiMenu === j ? "block" : "hidden"}`}>
      <ul className="pl-4 space-y-2">
        {subItem?.multi_menu?.map((item, i) => (
          <li key={i} className="first:pt-[14px]">
            <LockLink item={item} tabMenu={tabMenu} setTabMenu={setTabMenu}>
              <span
                className={`${
                  item.multiTitle === activeTab
                    ? "text-black font-medium"
                    : "text-slate-600"
                } text-sm flex space-x-3 items-center transition-all duration-150`}
              >
                <span
                  className={`${
                    item.multiTitle === activeTab
                      ? "bg-slate-900 ring-4 ring-opacity-[15%] ring-black-500"
                      : ""
                  } h-2 w-2 rounded-full border border-slate-600 inline-block flex-none`}
                ></span>
                <span className="flex-1">{item.multiTitle}</span>
              </span>
            </LockLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Multilevel;

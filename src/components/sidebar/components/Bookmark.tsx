import { useRecoilValue } from "recoil";
import {
  FavMenuType,
  SideMenuType,
  SideMenuTypeState,
  TabMenuListType,
  favMenuTypeState,
} from "../../../states/layout/layoutAtom";
import useTabMenu from "../../../hooks/useTabLayout";
import tabLayoutUtil from "../../../utils/tabLayoutUtil";

type Props = {
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
};

function Bookmark({ tabMenu, setTabMenu }: Props) {
  const { activeTab, handleTabOpen } = useTabMenu();
  const favMenu = useRecoilValue<FavMenuType>(favMenuTypeState);
  const selected = useRecoilValue<SideMenuType>(SideMenuTypeState);

  return (
    <div
      className={`w-[215px] h-full overflow-y-auto shadow-md ${
        selected === "bookmark" ? "block" : "hidden pointer-events-none"
      }`}
    >
      <ul>
        {favMenu.map((fav, index) => (
          <li
            key={index}
            className={`flex items-center justify-between px-4 py-2 cursor-pointer ${
              activeTab === fav.href ? "bg-primary bg-opacity-[0.07]" : ""
            }`}
            onClick={() => {
              handleTabOpen(tabMenu, setTabMenu, {
                name: fav.name ?? "",
                href: fav.href ?? "",
                component: tabLayoutUtil.findElement(fav.href),
              });
            }}
          >
            <p className="text-sm font-medium text-custom-black">{fav.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bookmark;

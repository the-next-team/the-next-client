import { useRecoilValue } from "recoil";
import {
  CurrentSideMenu,
  FavMenu,
  currentSideMenuState,
  favMenuState,
} from "../../../states/sidebar/sidebarAtom";
import useTabMenu from "../../../hooks/useTabMenu";
import TabMenuUtil from "../../../utils/tabMenuUtil";

function Bookmark() {
  const { activeTab, handleTabOpen } = useTabMenu();
  const favMenu = useRecoilValue<FavMenu>(favMenuState);
  const currentSideMenu = useRecoilValue<CurrentSideMenu>(currentSideMenuState);

  return (
    <div
      className={`w-[215px] h-full overflow-y-auto shadow-md ${
        currentSideMenu === "bookmark" ? "block" : "hidden pointer-events-none"
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
              handleTabOpen({
                name: fav.name ?? "",
                href: fav.href ?? "",
                component: TabMenuUtil.findElement(fav.href),
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

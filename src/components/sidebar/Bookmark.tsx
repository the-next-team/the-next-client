import { useRecoilState } from "recoil";
import {
  FavMenuType,
  TabMenuListType,
  favMenuTypeState,
} from "../../states/layout/layoutAtom";
import useTabMenu from "../../hooks/useTabMenu";

type Props = {
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
  selected: string;
};

function Bookmark({ tabMenu, setTabMenu, selected }: Props) {
  const [favMenu, setFavMenu] = useRecoilState<FavMenuType>(favMenuTypeState);
  const { activeTab, handleTabOpen, findElement } = useTabMenu();

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
                component: findElement(fav.href),
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

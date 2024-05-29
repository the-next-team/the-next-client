import NavMenu from "./components/NavMenu";
import Toolbar from "./components/Toolbar";
import { TabMenuListType } from "../../states/layout/layoutAtom";
import Bookmark from "./components/Bookmark";

type Props = {
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
};

function Sidebar({ tabMenu, setTabMenu }: Props) {
  return (
    <div className="flex h-full bg-white">
      <Toolbar tabMenu={tabMenu} setTabMenu={setTabMenu} />

      {/* 즐겨찾기 */}
      <Bookmark tabMenu={tabMenu} setTabMenu={setTabMenu} />

      {/* 메뉴 */}
      <NavMenu tabMenu={tabMenu} setTabMenu={setTabMenu} />
    </div>
  );
}

export default Sidebar;

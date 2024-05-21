import NavMenu from "../../components/sidebar/NavMenu";
import { menuItems } from "../../constants/data";
import { TabMenuListType } from "../../states/layout/layoutAtom";

type Props = {
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
};

function Sidebar({ tabMenu, setTabMenu }: Props) {
  return (
    <div className="w-[215px] h-full bg-white overflow-y-auto">
      {/* 즐겨찾기 기능 추가 예정 */}
      <NavMenu menus={menuItems} tabMenu={tabMenu} setTabMenu={setTabMenu} />
    </div>
  );
}

export default Sidebar;

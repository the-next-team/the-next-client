import NavMenu from "../../components/sidebar/NavMenu";
import { TabMenuListType } from "../../states/layout/layoutAtom";

type Props = {
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
};

function Sidebar({ tabMenu, setTabMenu }: Props) {
  return (
    <div className="fixed w-[248px] h-full bg-white overflow-y-auto">
      {/* 즐겨찾기 기능 추가 예정 */}
      <NavMenu tabMenu={tabMenu} setTabMenu={setTabMenu} />
    </div>
  );
}

export default Sidebar;

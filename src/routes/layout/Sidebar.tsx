import { useState } from "react";
import NavMenu from "../../components/sidebar/NavMenu";
import Toolbar from "../../components/sidebar/Toolbar";
import { TabMenuListType } from "../../states/layout/layoutAtom";

type Props = {
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
};

function Sidebar({ tabMenu, setTabMenu }: Props) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex h-full bg-white">
      <Toolbar selected={selected} setSelected={setSelected} />
      <NavMenu
        tabMenu={tabMenu}
        setTabMenu={setTabMenu}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}

export default Sidebar;

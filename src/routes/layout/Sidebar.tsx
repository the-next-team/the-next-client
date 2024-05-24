import { useState } from "react";
import NavMenu from "../../components/sidebar/NavMenu";
import Toolbar from "../../components/sidebar/Toolbar";
import { TabMenuListType } from "../../states/layout/layoutAtom";
import useTabMenu from "../../hooks/useTabMenu";
import Bookmark from "../../components/sidebar/Bookmark";

type Props = {
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
};

function Sidebar({ tabMenu, setTabMenu }: Props) {
  const { handleTabOpen, findElement } = useTabMenu();
  const [selected, setSelected] = useState("home");

  const toolMenus = [
    {
      name: "home",
      icon: "heroicons:home",
      onClick: () => {
        handleTabOpen(tabMenu, setTabMenu, {
          name: "대시보드",
          href: "home/dashboard",
          component: findElement("home/dashboard"),
        });
      },
    },
    {
      name: "bookmark",
      icon: "heroicons:star",
    },
    {
      name: "search",
      icon: "heroicons:magnifying-glass-solid",
    },
    {
      name: "menu",
      icon: "heroicons:building-library",
    },
    {
      name: "todo",
      icon: "heroicons:clipboard-document-list",
    },
    { name: "", icon: "heroicons:book-open" },
  ];

  return (
    <div className="flex h-full bg-white">
      <Toolbar
        toolMenus={toolMenus}
        selected={selected}
        setSelected={setSelected}
      />

      {/* 즐겨찾기 */}
      <Bookmark tabMenu={tabMenu} setTabMenu={setTabMenu} selected={selected} />

      {/* 메뉴 */}
      <NavMenu tabMenu={tabMenu} setTabMenu={setTabMenu} selected={selected} />
    </div>
  );
}

export default Sidebar;

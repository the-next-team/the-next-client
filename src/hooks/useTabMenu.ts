import { useRecoilState } from "recoil";
import {
  TabMenu,
  TabMenuList,
  activeTabType,
  activeTabTypeState,
} from "../states/layout/layoutAtom";

function useTabMenu() {
  const [activeTab, setActiveTab] =
    useRecoilState<activeTabType>(activeTabTypeState);

  // 탭 열기
  const handleTabOpen = (
    tabMenu: TabMenuList,
    setTabMenu: (tabMenu: TabMenuList) => void,
    tab: TabMenu
  ) => {
    if (tabMenu.every((t: { href: string }) => t.href !== tab.href)) {
      // 탭메뉴에 없는 새로운 메뉴라면
      if (tabMenu.length >= 10) {
        // 10개 넘으면 추가 X
        alert("탭은 최대 10개까지 추가 가능합니다.");
      } else {
        // 10개 안넘으면 추가 O
        setActiveTab(tab.href);
        setTabMenu([...tabMenu, tab]);
      }
    } else {
      setActiveTab(tab.href);
    }
  };

  // 탭 닫기
  const handleTabClose = (
    tabMenu: TabMenuList,
    setTabMenu: (tabMenu: TabMenuList) => void,
    href: string
  ) => {
    let updatedTabs = [...tabMenu];
    if (href === activeTab) {
      const currentIndex = updatedTabs.findIndex((t) => t.href === href);
      if (updatedTabs[currentIndex + 1]) {
        setActiveTab(updatedTabs[currentIndex + 1].href);
      } else if (updatedTabs[updatedTabs.length - 2]) {
        setActiveTab(updatedTabs[updatedTabs.length - 2].href);
      }
    }
    updatedTabs = updatedTabs.filter((t) => t.href !== href);
    setTabMenu(updatedTabs);
  };

  return {
    activeTab,
    handleTabOpen,
    handleTabClose,
  };
}

export default useTabMenu;

import { useRecoilState } from "recoil";
import {
  TabMenu,
  TabMenuList,
  activeTabType,
  activeTabTypeState,
  tabMenuState,
} from "../states/layout/layoutAtom";

function useTabMenu() {
  const [activeTab, setActiveTab] =
    useRecoilState<activeTabType>(activeTabTypeState);
  const [tabMenu, setTabMenu] = useRecoilState<TabMenuList>(tabMenuState);

  // 탭 열기
  const handleTabOpen = (tab: TabMenu) => {
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
  const handleTabClose = (href: string) => {
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
    tabMenu,
    setTabMenu,
    activeTab,
    handleTabOpen,
    handleTabClose,
  };
}

export default useTabMenu;

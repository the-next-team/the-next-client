import { useRecoilState } from "recoil";
import {
  TabMenuListType,
  TabMenuType,
  activeTabType,
  activeTabTypeState,
  tabMenuTypeState,
} from "../states/layout/layoutAtom";
import { menuItems } from "../constants/data";

function useTabMenu() {
  const [tabMenuState, setTabMenuState] =
    useRecoilState<TabMenuListType>(tabMenuTypeState);
  const [activeTab, setActiveTab] =
    useRecoilState<activeTabType>(activeTabTypeState);

  // href로 element 찾기
  const findElement = (link: string) => {
    let element = null;
    menuItems.map((item) => {
      if (item.child) {
        item.child.map((i) => {
          if (i.multi_menu) {
            i.multi_menu.map((m) => {
              if (m.multiLink === link) {
                element = m.multiElement;
              }
            });
          } else if (i.childlink === link) {
            element = i.childElement;
          }
        });
      } else if (item.link === link) {
        element = item.element;
      }
    });
    return element;
  };

  const findTitle = (link: string) => {
    let title: Array<string> = [];
    if (link) {
      menuItems.forEach((item) => {
        if (item.child) {
          item.child.forEach((i) => {
            if (i.multi_menu) {
              i.multi_menu.forEach((m) => {
                if (m.multiLink === link) {
                  title.push(item.title);
                  title.push(i.childtitle ?? "");
                  title.push(m.multiTitle);
                }
              });
            } else if (i.childlink === link) {
              title.push(item.title);
              title.push(i.childtitle ?? "");
            }
          });
        } else if (item.link === link) {
          title.push(item.title);
        }
      });
    }
    return title;
  };

  // 탭 열기
  const handleTabOpen = (
    tabMenu: TabMenuListType,
    setTabMenu: (tabMenu: TabMenuListType) => void,
    tab: TabMenuType
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
    tabMenu: TabMenuListType,
    setTabMenu: (tabMenu: TabMenuListType) => void,
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
    setActiveTab,
    tabMenuState,
    setTabMenuState,
    handleTabOpen,
    handleTabClose,
    findElement,
    findTitle,
  };
}

export default useTabMenu;

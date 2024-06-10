import { atom } from "recoil";
import { recoilPersist } from "../persist";
import Dashboard from "../../pages/dashboard/Dashboard";

const { persistAtom } = recoilPersist();

export const sidebarState = atom<boolean>({
  key: "sidebarState",
  default: false,
});

// 현재 활성화된 탭
export type activeTabType = string;
export const activeTabTypeState = atom<activeTabType>({
  key: "activeTabTypeState",
  default: "home/dashboard",
  effects_UNSTABLE: [persistAtom],
});

// 현재 탭 리스트
export type TabMenuList = Array<TabMenu>;
export type TabMenu = {
  name: string;
  href: string;
  component?: React.ComponentType | null;
};
export const tabMenuState = atom<TabMenuList>({
  key: "tabMenuState",
  default: [{ name: "대시보드", href: "home/dashboard", component: Dashboard }],
  effects_UNSTABLE: [persistAtom],
});

// 즐겨찾기
export type FavMenuType = Array<{ name: string; href: string }>;
export const favMenuTypeState = atom<FavMenuType>({
  key: "favMenuTypeState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 현재 선택된 사이드메뉴
export type SideMenuType = string;
export const SideMenuTypeState = atom<SideMenuType>({
  key: "SideMenuTypeState",
  default: "menu",
  effects_UNSTABLE: [persistAtom],
});

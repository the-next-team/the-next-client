import { atom } from "recoil";
import { recoilPersist } from "../persist";

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
export type TabMenuListType = Array<TabMenuType>;
export type TabMenuType = {
  name: string;
  href: string;
  component?: React.ComponentType | null;
};
export const tabMenuTypeState = atom<TabMenuListType>({
  key: "tabMenuTypeState",
  default: [{ name: "대시보드", href: "home/dashboard" }],
  effects_UNSTABLE: [persistAtom],
});

// 즐겨찾기
export type FavMenuType = Array<{ name: string; href: string }>;
export const favMenuTypeState = atom<FavMenuType>({
  key: "favMenuTypeState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

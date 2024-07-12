import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { recoilPersist } from "../persist";

const { persistAtom } = recoilPersist();

// 즐겨찾기
export type FavMenu = Array<{ name: string; href: string }>;
export const favMenuState = atom<FavMenu>({
  key: `favMenuState-${uuidv4()}`,
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 현재 선택된 사이드메뉴
export type CurrentSideMenu = string;
export const currentSideMenuState = atom<CurrentSideMenu>({
  key: `currentSideMenuState-${uuidv4()}`,
  default: "menu",
  effects_UNSTABLE: [persistAtom],
});

// 현재 열린 사이드메뉴
export type activeSubmenu = number | null;
export const activeSubmenuState = atom<activeSubmenu>({
  key: `activeSubmenuState-${uuidv4()}`,
  default: null,
  effects_UNSTABLE: [persistAtom],
});

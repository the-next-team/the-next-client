import { atom } from "recoil";
import { recoilPersist } from "../persist";

const { persistAtom } = recoilPersist();

// 즐겨찾기
export type FavMenu = Array<{ name: string; href: string }>;
export const favMenuState = atom<FavMenu>({
  key: "favMenuState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

// 현재 선택된 사이드메뉴
export type CurrentSideMenu = string;
export const currentSideMenuState = atom<CurrentSideMenu>({
  key: "currentSideMenuState",
  default: "menu",
  effects_UNSTABLE: [persistAtom],
});

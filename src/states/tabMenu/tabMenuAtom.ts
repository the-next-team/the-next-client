import { atom } from "recoil";
import { recoilPersist } from "../persist";

const { persistAtom } = recoilPersist();

// 현재 탭 리스트
export type TabMenuList = Array<TabMenu>;
export type TabMenu = {
  name: string;
  href: string;
};
export const tabMenuState = atom<TabMenuList>({
  key: "tabMenuState",
  default: [{ name: "대시보드", href: "hm/HMM001L" }],
  effects_UNSTABLE: [persistAtom],
});

import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { recoilPersist } from "../persist";

const { persistAtom } = recoilPersist();

// 현재 탭 리스트
export type TabMenuList = Array<TabMenu>;
export type TabMenu = {
  name: string;
  href: string;
};
export const tabMenuState = atom<TabMenuList>({
  key: `tabMenuState-${uuidv4()}`,
  default: [{ name: "대시보드", href: "dashboard/Dashboard" }],
  effects_UNSTABLE: [persistAtom],
});

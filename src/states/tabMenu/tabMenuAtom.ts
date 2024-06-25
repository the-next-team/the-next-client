import { atom } from "recoil";
import { recoilPersist } from "../persist";
import Dashboard from "../../pages/dashboard/Dashboard";

const { persistAtom } = recoilPersist();

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

import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { IMenu1Depth } from "../../api/services/menuService";
import { recoilPersist } from "../persist";

const { persistAtom } = recoilPersist();

export const sidebarState = atom<boolean>({
  key: `sidebarState-${uuidv4()}`,
  default: false,
});

export type NavbarType = "floating" | "sticky" | "static" | "hidden";
export const navbarTypeState = atom<NavbarType>({
  key: `naverTypState-${uuidv4()}`,
  default: "sticky",
  effects_UNSTABLE: [persistAtom],
});

export type SkinType = "default" | "bordered";
export const skinState = atom<SkinType>({
  key: `skinState-${uuidv4()}`,
  default: "default",
  effects_UNSTABLE: [persistAtom],
});

type RtlType = boolean;
export const rtlState = atom<RtlType>({
  key: `rtlState-${uuidv4()}`,
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export type Type = "vertical" | "horizontal";
export const typeState = atom<Type>({
  key: `typeState-${uuidv4()}`,
  default: "vertical",
  effects_UNSTABLE: [persistAtom],
});

export type FooterType = "static" | "sticky" | "hidden";
export const footerTypeState = atom<FooterType>({
  key: `footerTypeState-${uuidv4()}`,
  default: "hidden",
  effects_UNSTABLE: [persistAtom],
});

type DarkModeType = boolean;
export const darkModeState = atom<DarkModeType>({
  key: `darkModeState-${uuidv4()}`,
  default: false,
  effects_UNSTABLE: [persistAtom],
});

type SemiDarkModeType = boolean;
export const semiDarkModeState = atom<SemiDarkModeType>({
  key: `semiDarkModeState-${uuidv4()}`,
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export type ContentWidthType = "full" | "boxed";
export const contentWidthState = atom<ContentWidthType>({
  key: `contentWidthState-${uuidv4()}`,
  default: "full",
  effects_UNSTABLE: [persistAtom],
});

type MonoChromeType = boolean;
export const monoChromeState = atom<MonoChromeType>({
  key: `monoChromeState-${uuidv4()}`,
  default: false,
  effects_UNSTABLE: [persistAtom],
});

type MenuType = {
  isCollapsed: boolean;
  isHidden: boolean;
};
export const menuTypeState = atom<MenuType>({
  key: `menuTypeState-${uuidv4()}`,
  default: {
    isCollapsed: false,
    isHidden: false,
  },
  effects_UNSTABLE: [persistAtom],
});

type MobileMenuType = boolean;
export const mobileMenuTypeState = atom<MobileMenuType>({
  key: `mobileMenuTypeState-${uuidv4()}`,
  default: false,
  effects_UNSTABLE: [persistAtom],
});

type CustomizerType = boolean;
export const customizerTypeState = atom<CustomizerType>({
  key: `customizerTypeState-${uuidv4()}`,
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// 현재 활성화된 탭
export type activeTabType = string;
export const activeTabTypeState = atom<activeTabType>({
  key: `activeTabTypeState-${uuidv4()}`,
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
  key: `tabMenuTypeState-${uuidv4()}`,
  default: [{ name: "대시보드", href: "dashboard/Dashboard" }],
  effects_UNSTABLE: [persistAtom],
});

export type FavMenuType = Array<{ name: string; href: string }>;
export const favMenuTypeState = atom<FavMenuType>({
  key: `favMenuTypeState-${uuidv4()}`,
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const menuState = atom<IMenu1Depth[]>({
  key: `menuState-${uuidv4()}`,
  default: [],
  effects_UNSTABLE: [persistAtom],
});

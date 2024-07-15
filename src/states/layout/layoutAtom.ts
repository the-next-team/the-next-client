import { atom } from "recoil";
import { recoilPersist } from "../persist";

const { persistAtom } = recoilPersist();

export const sidebarState = atom<boolean>({
  key: "sidebarState",
  default: false,
});

export type NavbarType = "floating" | "sticky" | "static" | "hidden";
export const navbarTypeState = atom<NavbarType>({
  key: "naverTypState",
  default: "sticky",
  effects_UNSTABLE: [persistAtom],
});

export type SkinType = "default" | "bordered";
export const skinState = atom<SkinType>({
  key: "skinState",
  default: "default",
  effects_UNSTABLE: [persistAtom],
});

type RtlType = boolean;
export const rtlState = atom<RtlType>({
  key: "rtlState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export type Type = "vertical" | "horizontal";
export const typeState = atom<Type>({
  key: "typeState",
  default: "vertical",
  effects_UNSTABLE: [persistAtom],
});

export type FooterType = "static" | "sticky" | "hidden";
export const footerTypeState = atom<FooterType>({
  key: "footerTypeState",
  default: "hidden",
  effects_UNSTABLE: [persistAtom],
});

type DarkModeType = boolean;
export const darkModeState = atom<DarkModeType>({
  key: "darkModeState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

type SemiDarkModeType = boolean;
export const semiDarkModeState = atom<SemiDarkModeType>({
  key: "semiDarkModeState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export type ContentWidthType = "full" | "boxed";
export const contentWidthState = atom<ContentWidthType>({
  key: "contentWidthState",
  default: "full",
  effects_UNSTABLE: [persistAtom],
});

type MonoChromeType = boolean;
export const monoChromeState = atom<MonoChromeType>({
  key: "monoChromeState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

type MenuType = {
  isCollapsed: boolean;
  isHidden: boolean;
};
export const menuTypeState = atom<MenuType>({
  key: "menuTypeState",
  default: {
    isCollapsed: false,
    isHidden: false,
  },
  effects_UNSTABLE: [persistAtom],
});

type MobileMenuType = boolean;
export const mobileMenuTypeState = atom<MobileMenuType>({
  key: "mobileMenuTypeState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

type CustomizerType = boolean;
export const customizerTypeState = atom<CustomizerType>({
  key: "customizerTypeState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

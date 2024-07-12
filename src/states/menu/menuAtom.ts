import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { IMenu } from "../../api/services/menuService";
import { recoilPersist } from "../persist";

const { persistAtom } = recoilPersist();

export const menuState = atom<IMenu[]>({
  key: `menuState-${uuidv4()}`,
  default: localStorage.getItem("menu")
    ? JSON.parse(localStorage.getItem("menu")!)
    : [],
  effects_UNSTABLE: [persistAtom],
});

export const menuSelectedState = atom<IMenu | null>({
  key: `menuSelectedState-${uuidv4()}`,
  default: null,
  effects_UNSTABLE: [persistAtom],
});

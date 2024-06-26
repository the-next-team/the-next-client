import { atom } from "recoil";
import { IMenu } from "../../api/services/menuService";
import { recoilPersist } from "../persist";

const { persistAtom } = recoilPersist();

export const menuState = atom<IMenu[]>({
    key: "menuState",
    default: localStorage.getItem("menu") && JSON.parse(localStorage.getItem("menu")!),
    effects_UNSTABLE: [persistAtom],
  });
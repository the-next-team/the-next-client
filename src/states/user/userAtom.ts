import { atom } from "recoil";
import { recoilPersist } from "../persist";
const { persistAtom } = recoilPersist();

export interface UserState {
  id: string;
  username: string;
  employeeNumber: string | null;
  loginIp: string;
}

export const userState = atom<UserState | null>({
  key: "userState",
  default: localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")!),
  effects_UNSTABLE: [persistAtom],
});

import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { recoilPersist } from "../persist";

const { persistAtom } = recoilPersist();

export interface UserState {
  id: string;
  username: string;
  employeeNumber: string | null;
  loginIp: string;
}

export const userState = atom<UserState | null>({
  key: `userState-${uuidv4()}`,
  default: localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")!),
  effects_UNSTABLE: [persistAtom],
});

import { atom } from "recoil";
import { recoilPersist } from "../persist";
const { persistAtom } = recoilPersist({storage: sessionStorage});

export interface UserState {
  id: string;
  username: string;
  employeeNumber: string | null;
  loginIp: string;
}

export const userState = atom<UserState | null>({
  key: "userState",
  default: sessionStorage.getItem("user") && JSON.parse(sessionStorage.getItem("user")!),
  effects_UNSTABLE: [persistAtom],
});

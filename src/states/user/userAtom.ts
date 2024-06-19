import { atom } from "recoil";

export interface UserState {
  id: string;
  username: string;
  employeeNumber: string | null;
  loginIp: string;
}

export const userState = atom<UserState | null>({
  key: "userState",
  default:
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")!),
});

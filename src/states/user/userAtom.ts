import { atom } from "recoil";

export interface UserState {
  userName: string;
  email: string;
  phoneNumber?: string;
}

export const userState = atom<UserState | null>({
  key: "userState",
  default:
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")!),
});

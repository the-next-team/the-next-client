import { atom } from "recoil";

export interface LoadingState {
  open: boolean;
}

export const loadingState = atom<LoadingState>({
  key: "loadingState",
  default: {
    open: false,
  },
});

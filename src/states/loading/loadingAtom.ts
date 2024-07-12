import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export interface LoadingState {
  open: boolean;
}

export const loadingState = atom<LoadingState>({
  key: `loadingState-${uuidv4()}`,
  default: {
    open: false,
  },
});

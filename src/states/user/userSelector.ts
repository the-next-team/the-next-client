import { selector } from "recoil";
import { userState } from "./userAtom";

export const userSelector = selector({
  key: "useSelector",
  get: ({ get }) => !!get(userState),
});

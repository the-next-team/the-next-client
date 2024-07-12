import { selector } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { userState } from "./userAtom";

export const userSelector = selector({
  key: `useSelector-${uuidv4()}`,
  get: ({ get }) => !!get(userState),
});

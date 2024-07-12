import { atomFamily, selectorFamily } from "recoil";
import { v4 as uuidv4 } from "uuid";
import { CodeService, ICodeItem } from "../../api/services/codeService";
import { recoilPersist } from "../persist";

const { persistAtom } = recoilPersist();

export const codeState = atomFamily<ICodeItem[], string>({
  key: `codeState-${uuidv4()}`,
  default: localStorage.getItem("code")
    ? JSON.parse(localStorage.getItem("code")!)
    : [],
  effects_UNSTABLE: [persistAtom],
});

export const codeSelector = selectorFamily<ICodeItem[], string>({
  key: `codeSelector-${uuidv4()}`,
  get: (codeType) => async (): Promise<ICodeItem[]> => {
    try {
      const response = await CodeService.getCodeByKind(codeType);
      if (response.status === "OK") {
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching code:", error);
    }
    return [];
  },
  set: (codeType) => ({ set }, newValue) => {
    set(codeState(codeType), newValue);
  },
});

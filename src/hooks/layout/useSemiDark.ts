import { SetterOrUpdater, useRecoilState } from "recoil";
import { semiDarkModeState } from "../../states/layout/layoutAtom";

function useSemiDark(): [boolean, SetterOrUpdater<boolean>] {
  const [isSemiDark, setSemiDark] = useRecoilState(semiDarkModeState);
  return [isSemiDark, setSemiDark];
}

export default useSemiDark;

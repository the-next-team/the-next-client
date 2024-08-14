import { useEffect } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { rtlState } from "../../states/layout/layoutAtom";

function useRtl(): [boolean, SetterOrUpdater<boolean>] {
  const [isRtl, setRtl] = useRecoilState(rtlState);

  useEffect(() => {
    const element = document.getElementsByTagName("html")[0];

    if (isRtl) {
      element.setAttribute("dir", "rtl");
    } else {
      element.setAttribute("dir", "ltr");
    }
  }, [isRtl]);

  return [isRtl, setRtl];
}

export default useRtl;

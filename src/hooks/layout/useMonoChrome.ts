import { useEffect } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { monoChromeState } from "../../states/layout/layoutAtom";

function useMonoChrome(): [boolean, SetterOrUpdater<boolean>] {
  const [isMonoChrome, setMonoChrome] = useRecoilState(monoChromeState);

  useEffect(() => {
    const element = document.getElementsByTagName("html")[0];

    if (isMonoChrome) {
      element.classList.add("grayscale");
    } else {
      element.classList.remove("grayscale");
    }
  }, [isMonoChrome]);

  return [isMonoChrome, setMonoChrome];
}

export default useMonoChrome;

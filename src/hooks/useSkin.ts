import { useEffect } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { skinState, SkinType } from "../states/layout/layoutAtom";

function useSkin(): [SkinType, SetterOrUpdater<SkinType>] {
  const [skin, setSkin] = useRecoilState(skinState);

  useEffect(() => {
    const body = window.document.body;
    const classNames = {
      default: "skin--default",
      bordered: "skin--bordered",
    };

    if (skin === "default") {
      body.classList.add(classNames.default);
      body.classList.remove(classNames.bordered);
    } else if (skin === "bordered") {
      body.classList.add(classNames.bordered);
      body.classList.remove(classNames.default);
    }
  }, [skin]);

  return [skin, setSkin];
}

export default useSkin;

import { useRecoilState } from "recoil";
import { menuTypeState } from "../../states/layout/layoutAtom";

function useMenuHidden(): [boolean, (value: boolean) => void] {
  const [menuHidden, _setMenuHidden] = useRecoilState(menuTypeState);

  const setMenuHidden = (hidden: boolean) => {
    _setMenuHidden((prev) => {
      return { ...prev, isHidden: hidden };
    });
  };

  return [menuHidden.isHidden, setMenuHidden];
}

export default useMenuHidden;

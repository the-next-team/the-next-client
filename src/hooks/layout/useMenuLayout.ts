import { SetterOrUpdater, useRecoilState } from "recoil";
import { Type, typeState } from "../../states/layout/layoutAtom";

function useMenuLayout(): [Type, SetterOrUpdater<Type>]  {
  const [menuType, setMenuType] = useRecoilState(typeState);
  return [menuType, setMenuType];
}

export default useMenuLayout;

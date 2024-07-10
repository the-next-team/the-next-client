import { SetterOrUpdater, useRecoilState } from "recoil";
import { mobileMenuTypeState } from "../../states/layout/layoutAtom";

function useMobileMenu(): [boolean, SetterOrUpdater<boolean>] {
  const [mobileMenu, setMobileMenu] = useRecoilState(mobileMenuTypeState);
  return [mobileMenu, setMobileMenu];
}

export default useMobileMenu;

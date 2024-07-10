import { SetterOrUpdater, useRecoilState } from "recoil";
import { NavbarType, navbarTypeState } from "../../states/layout/layoutAtom";

function useNavbarType(): [NavbarType, SetterOrUpdater<NavbarType>] {
  const [navbarType, setNavbarType] = useRecoilState(navbarTypeState);
  return [navbarType, setNavbarType];
}

export default useNavbarType;

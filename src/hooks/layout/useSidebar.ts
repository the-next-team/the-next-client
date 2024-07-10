import { SetterOrUpdater, useRecoilState } from "recoil";
import { sidebarState } from "../../states/layout/layoutAtom";

const useSidebar = (): [boolean, SetterOrUpdater<boolean>] => {
  const [collapsed, setCollapsed] = useRecoilState<boolean>(sidebarState);

  return [collapsed, setCollapsed];
};

export default useSidebar;

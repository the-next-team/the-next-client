import { useRecoilValue } from "recoil";
import {
  CurrentSideMenu,
  currentSideMenuState,
} from "../../../states/sidebar/sidebarAtom";

function Todo() {
  const currentSideMenu = useRecoilValue<CurrentSideMenu>(currentSideMenuState);

  return (
    <div
      className={`w-[215px] h-full overflow-y-auto ${
        currentSideMenu === "todo" ? "block" : "hidden pointer-events-none"
      }`}
    ></div>
  );
}

export default Todo;

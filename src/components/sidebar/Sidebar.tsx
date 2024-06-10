import NavMenu from "./components/NavMenu";
import Toolbar from "./components/Toolbar";
import Bookmark from "./components/Bookmark";

function Sidebar() {
  return (
    <div className="flex h-full bg-white">
      <Toolbar />

      {/* 즐겨찾기 */}
      <Bookmark />

      {/* 메뉴 */}
      <NavMenu />
    </div>
  );
}

export default Sidebar;

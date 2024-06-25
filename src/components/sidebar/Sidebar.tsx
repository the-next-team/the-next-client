import Toolbar from "./components/Toolbar";
import Bookmark from "./components/Bookmark";
import MainMenu from "./components/MainMenu";

function Sidebar() {
  return (
    <div className="flex h-full bg-white">
      <Toolbar />

      {/* 즐겨찾기 */}
      <Bookmark />

      {/* 메뉴 */}
      <MainMenu />
    </div>
  );
}

export default Sidebar;

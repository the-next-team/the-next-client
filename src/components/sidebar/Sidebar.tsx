import Toolbar from "./components/Toolbar";
import Bookmark from "./components/Bookmark";
import MainMenu from "./components/MainMenu";
import SearchBar from "./components/SearchBar";
import SampleMenu from "./components/SampleMenu";

function Sidebar() {
  return (
    <div className="flex h-full bg-white select-none">
      <Toolbar />

      {/* 즐겨찾기 */}
      <Bookmark />

      {/* 메뉴 */}
      <MainMenu />

      {/* 검색창 */}
      <SearchBar />

      {/* 샘플 */}
      <SampleMenu />
    </div>
  );
}

export default Sidebar;

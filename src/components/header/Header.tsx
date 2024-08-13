import { Icon } from "@iconify/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import NextLoge from "../../assets/images/logo/the-next-icon.png";
import Logo from "../../assets/images/logo/smart-next@x4.png";
import useUser from "../../hooks/useUser";
import {
  CurrentSideMenu,
  currentSideMenuState,
} from "../../states/sidebar/sidebarAtom";
import Toolbar from "./components/Toolbar";
import TopMenu from "./components/TopMenu";

function Header() {
  const setCurrentSideMenu =
    useSetRecoilState<CurrentSideMenu>(currentSideMenuState);
  const [visible, setVisible] = useState(false);
  const { user, logout } = useUser();

  const dropdown = [
    {
      name: "Logout",
      icon: "heroicons:arrow-left-on-rectangle-20-solid",
      onClick: () => {
        logout();
      },
    },
  ];

  return (
    <header className="relative bg-[#082e5f] flex items-center justify-between px-2 gap-5">
      {/* NEXT 로고 */}
      <div className="flex items-center gap-5">
        <div>
          <img className="h-[30px] rounded-sm" src={NextLoge} alt="" />
        </div>
        <div className="flex items-center w-[195px]">
          <img className="h-4" src={Logo} alt="" />
        </div>
        <TopMenu />
      </div>
      <div className="flex items-center gap-3">
        {/* 툴바 */}
        <div className="hidden lg:block">
          <Toolbar />
        </div>
        {/* 검색바 */}
        <div className="hidden xl:block">
          <div
            className="w-[230px] flex items-center gap-2 rounded cursor-pointer bg-custom-gray-100 bg-opacity-20 px-[6px] py-1"
            onClick={() => setCurrentSideMenu("search")}
          >
            <Icon
              icon="heroicons:magnifying-glass-solid"
              width="16"
              color="white"
            />
            <input
              placeholder="통합 검색"
              className="w-full text-xs text-white bg-transparent outline-none cursor-pointer"
              readOnly
            />
          </div>
        </div>
        {/* 알림 */}
        <div className="cursor-pointer rounded-[6px] p-1 bg-custom-gray-100 bg-opacity-20 relative">
          <Icon icon="heroicons:bell" width="16" color="white" />
          <p className="absolute -right-1 -top-1 text-[11px] font-medium text-white">
            12
          </p>
        </div>
        {/* 설정 */}
        <div className="cursor-pointer rounded-[6px] p-1 bg-custom-gray-100 bg-opacity-20">
          <Icon icon="heroicons:cog-6-tooth" width="16" color="white" />
        </div>
        {/* 프로필 */}
        <div
          className="relative flex items-center gap-1 text-white cursor-pointer break-keep"
          onClick={() => setVisible((prev) => !prev)}
        >
          <p className="font-semibold">{user?.username}</p>
          <p className="text-sm font-light">님</p>
          <Icon icon="heroicons:chevron-down" width="16" color="white" />
          {visible && (
            <div className="absolute right-0 z-10 w-32 py-1 bg-white rounded shadow-md top-8">
              {dropdown.map((menu, i) => (
                <div
                  key={i}
                  className="flex items-center w-full gap-2 px-4 py-0.5 hover:bg-custom-blue-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    menu.onClick && menu.onClick();
                  }}
                >
                  <Icon icon={menu.icon} width="16" color="#111625" />
                  <p className="text-sm text-custom-black">{menu.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

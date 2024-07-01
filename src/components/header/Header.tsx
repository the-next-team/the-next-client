import { Icon } from "@iconify/react";
import { useState } from "react";
import Logo1 from "../../assets/images/logo/logo-smartsb-01.png";
import Logo2 from "../../assets/images/logo/logo-smartsb-02.png";
import useMenu from "../../hooks/useMenu";
import useUser from "../../hooks/useUser";
import Toolbar from "./components/Toolbar";

function Header() {
  const [visible, setVisible] = useState(false);
  const { user, logout } = useUser();
  const { menus, selectedMenu, setSelectedMenu } = useMenu();

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
    <header className="bg-[#111625] h-8 flex flex-none items-center px-[10px] gap-10">
      <div className="flex items-center gap-[10px] w-[215px]">
        <img className="w-6 h-6" src={Logo1} alt="" />
        <img className="w-[87px] h-[19px]" src={Logo2} alt="" />
      </div>
      <div className="flex justify-start flex-grow gap-6">
        {menus?.map((menu, index) => (
          <button
            key={index}
            className={`${
              selectedMenu?.name === menu.name
                ? "text-primary border-b border-primary"
                : "text-white"
            } text-sm`}
            onClick={() => setSelectedMenu(menu)}
          >
            <p>{menu.name}</p>
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        {/* 툴바 */}
        <Toolbar />
        {/* 검색바 */}
        <div className="w-[230px] flex items-center gap-2 rounded bg-custom-gray-100 bg-opacity-20 px-[6px] py-1">
          <Icon
            icon="heroicons:magnifying-glass-solid"
            width="16"
            color="white"
          />
          <input
            placeholder="통합 검색"
            className="w-full text-xs text-white bg-transparent outline-none"
          />
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
          className="relative flex items-center gap-1 text-white cursor-pointer"
          onClick={() => setVisible((prev) => !prev)}
        >
          <p className="font-semibold">{user?.username}</p>
          <p className="text-sm font-light">님</p>
          <Icon icon="heroicons:chevron-down" width="16" color="white" />
          {visible && (
            <div className="absolute right-0 w-32 py-1 bg-white rounded shadow-md top-8">
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

import { Icon } from "@iconify/react";
import Logo1 from "../../assets/images/logo/logo-smartsb-01.png";
import Logo2 from "../../assets/images/logo/logo-smartsb-02.png";
import Toolbar from "../../components/header/Toolbar";

function Header() {
  return (
    <header className="bg-[#111625] h-8 flex flex-none items-center px-[10px] justify-between">
      <div className="flex items-center gap-[10px]">
        <img className="w-6 h-6" src={Logo1} alt="" />
        <img className="w-[87px] h-[19px]" src={Logo2} alt="" />
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
          className="flex items-center gap-1 text-white cursor-pointer"
          onClick={() => {}}
        >
          <p className="font-semibold">홍길동</p>
          <p className="text-sm font-light">님</p>
          <Icon icon="heroicons:chevron-down" width="16" color="white" />
        </div>
      </div>
    </header>
  );
}

export default Header;

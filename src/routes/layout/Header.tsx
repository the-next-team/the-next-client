import { FiChevronDown } from "react-icons/fi";
import Logo1 from "../../assets/images/logo/logo-smartsb-01.png";
import Logo2 from "../../assets/images/logo/logo-smartsb-02.png";
import { Icon } from "@iconify/react";
import Toolbar from "../../components/header/Toolbar";

function Header() {
  return (
    <header className="bg-[#111625] h-8 flex items-center px-[10px] justify-between">
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
        {/* 프로필 */}
        <div className="flex items-center gap-1 text-white">
          <p className="font-bold">홍길동</p>
          <p className="text-sm">님</p>
          <FiChevronDown size={16} />
        </div>
      </div>
    </header>
  );
}

export default Header;

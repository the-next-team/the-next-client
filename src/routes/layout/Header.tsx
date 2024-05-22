import { FiChevronDown } from "react-icons/fi";
import Logo from "../../assets/images/logo/logo.png";
import TextLogo from "../../assets/images/logo/textLogo.png";

function Header() {
  return (
    <header className="bg-[#111625] h-8 flex items-center px-[10px] justify-between">
      <div className="flex items-center gap-[10px]">
        <img className="w-6 h-6 rounded" src={Logo} alt="" />
        <img className="w-[87px] h-[19px]" src={TextLogo} alt="" />
      </div>
      <div className="flex items-center gap-3">
        <input
          placeholder="통합 검색"
          className="bg-white bg-opacity-10 rounded outline-none text-white py-0.5 px-1"
        />
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

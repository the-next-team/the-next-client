import { Icon } from "@iconify/react";
import { useRecoilState } from "recoil";
import {
  CurrentSideMenu,
  currentSideMenuState,
} from "../../../states/sidebar/sidebarAtom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function SearchBar() {
  const [currentSideMenu, setCurrentSideMenu] =
    useRecoilState<CurrentSideMenu>(currentSideMenuState);
  const { register, resetField, setFocus } = useForm();

  useEffect(() => {
    resetField("search");
    setFocus("search");
  }, [currentSideMenu]);

  return (
    <div
      className={`fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full px-6 transition-opacity duration-200 ease-out ${
        currentSideMenu == "search"
          ? "opacity-100 bg-opacity-50 cursor-pointer bg-custom-black backdrop-blur-sm"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => setCurrentSideMenu("")}
    >
      <div className="relative w-full h-full">
        <div
          className={`${
            currentSideMenu == "search" ? "scale-100" : ""
          } transition-transform scale-90 duration-200 absolute flex items-center w-full sm:w-[576px] gap-2 px-4 py-3 -translate-x-1/2 bg-white rounded cursor-default left-1/2 top-1/4`}
          onClick={(e) => e.stopPropagation()}
        >
          <Icon icon="heroicons:magnifying-glass-solid" width="16" />
          <input
            placeholder="Search..."
            className="w-full outline-none"
            {...register("search")}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

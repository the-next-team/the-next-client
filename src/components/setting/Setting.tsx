import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRecoilState } from "recoil";
import SimpleBar from "simplebar-react";
import useWidth from "../../hooks/layout/useWidth";
import { customizerTypeState } from "../../states/layout/layoutAtom";
import Icon from "../icons/Icon";
import MenuClose from "./components/MenuClose";
import MenuHidden from "./components/MenuHidden";
import Menulayout from "./components/Menulayout";
import Semidark from "./components/Semidark";
import Skin from "./components/Skin";
import Theme from "./components/Theme";

function Setting() {
  const [isOpen, setCustomizer] = useRecoilState(customizerTypeState);
  const { width, breakpoints } = useWidth();

  return (
    <div>
      {!isOpen && (
        <span
          className="fixed ltr:md:right-[-16px] ltr:right-0 rtl:left-0 rtl:md:left-[-16px] top-1/2 z-[888] translate-y-1/2 bg-slate-800 text-slate-50 dark:bg-slate-700 dark:text-slate-300 cursor-pointer transform rotate-90 flex items-center text-sm font-medium px-2 py-2 shadow-deep ltr:rounded-b rtl:rounded-t"
          onClick={() => setCustomizer(true)}
        >
          <Icon
            icon="clarity:settings-line"
            className="text-lg text-slate-50 animate-spin"
          />
          <span className="hidden md:inline-block ltr:ml-2 rtl:mr-2">
            설정
          </span>
        </span>
      )}

      <div
        className={`
    setting-wrapper fixed ltr:right-0 rtl:left-0 top-0 md:w-[400px] w-[300px]
     bg-white dark:bg-slate-800 h-screen z-[9999]  md:pb-6 pb-[100px] shadow-base2
      dark:shadow-base3 border border-slate-200 dark:border-slate-700 transition-all duration-150
      ${
        isOpen
          ? "translate-x-0 opacity-100 visible"
          : "ltr:translate-x-full rtl:-translate-x-full opacity-0 invisible"
      }
    `}
      >
        <SimpleBar className="h-full px-6">
          <header className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 -mx-6 px-6 py-[15px] mb-6">
            <div>
              <span className="block text-xl text-slate-900 font-medium dark:text-[#eee]">
                테마 사용자 정의
              </span>
              <span className="block text-sm font-light text-[#68768A] dark:text-[#eee]">
                사용자 정의 & 실시간 미리보기
              </span>
            </div>
            <div
              className="text-2xl cursor-pointer text-slate-800 dark:text-slate-200"
              onClick={() => setCustomizer(false)}
            >
              <Icon icon="heroicons-outline:x" />
            </div>
          </header>
          <div className="space-y-4 ">
            <Skin />
            <Theme />
            <Semidark />
            <hr className="-mx-6 border-slate-200 dark:border-slate-700" />

            {/* <div> */}
              {/* <RtlSwicth /> */}
            {/* </div> */}
            {/* <hr className="-mx-6 border-slate-200 dark:border-slate-700" /> */}
            {/* <ContentWidth /> */}
            {width >= breakpoints.xl && <Menulayout />}

            <div className="pt-4">
              <MenuClose />
            </div>
            <div className="pt-2">
              <MenuHidden />
            </div>
            {/* <hr className="-mx-6 border-slate-200 dark:border-slate-700" /> */}
            {/* <NavbarTypeView /> */}
            {/* <FooType /> */}
          </div>
        </SimpleBar>
      </div>

      <Transition as={Fragment} show={isOpen}>
        <div
          className="overlay bg-white bg-opacity-0 fixed inset-0 z-[999]"
          onClick={() => setCustomizer(false)}
        ></div>
      </Transition>
    </div>
  );
}

export default Setting;

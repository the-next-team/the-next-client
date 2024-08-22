import { Icon } from "@iconify/react";
import useTabMenu from "../../hooks/useTabMenu";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { tabMenuState } from "../../states/tabMenu/tabMenuAtom";
import { useRef } from "react";

const TabMenu = () => {
  const navigate = useNavigate();
  const { activeTab, tabMenu, handleTabOpen, handleTabClose } = useTabMenu();
  const setTabMenuReset = useResetRecoilState(tabMenuState);
  const horizontalScrollRef = useRef<HTMLDivElement | null>(null);

  const handleNextButtonClick = (type: "prev" | "next") => {
    if (!horizontalScrollRef.current) return;
    horizontalScrollRef.current.scrollTo({
      left:
        type === "prev"
          ? horizontalScrollRef.current.scrollLeft -
            horizontalScrollRef.current.offsetWidth
          : horizontalScrollRef.current.scrollLeft +
            horizontalScrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        ref={horizontalScrollRef}
        className={`flex-none overflow-x-auto tabMenu bg-custom-gray-100 ${tabMenu.length > 1 ? "mr-[121px]" : ""}`}
      >
        <div className="flex w-fit">
          {tabMenu.map((tab, index) => (
            <button
              className="h-8 cursor-pointer"
              key={index}
              onClick={() => handleTabOpen(tab)}
            >
              <div
                className={`flex items-center h-full gap-2 px-4 ${
                  tab.href === activeTab
                    ? "bg-custom-blue-100 rounded-tr-[10px] divide-none"
                    : "border-r border-custom-blue-100"
                }`}
              >
                <p className="text-xs whitespace-nowrap text-custom-black">
                  {tab.name}
                </p>
                {/* 메뉴 닫기 (단, 대시보드는 고정)*/}
                {tab.href !== "dashboard" && (
                  <div
                    className="rounded-full p-0.5"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTabClose(tab.href);
                    }}
                  >
                    <Icon
                      icon="heroicons:x-mark-16-solid"
                      width="16"
                      color="#111625"
                    />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
      {tabMenu.length > 1 && (
        <div className="absolute flex items-center gap-1 -translate-y-1/2 right-2 top-4">
          {/* 탭 목록 이동 */}
          <div className="flex items-center divide-x divide-slate-100">
            <button
              className="p-1 bg-white cursor-pointer rounded-l-[6px]"
              onClick={() => handleNextButtonClick("prev")}
            >
              <Icon
                icon="heroicons:chevron-left-16-solid"
                width="16"
                color="#111625"
              />
            </button>
            <button
              className="p-1 bg-white cursor-pointer rounded-r-[6px]"
              onClick={() => handleNextButtonClick("next")}
            >
              <Icon
                icon="heroicons:chevron-right-16-solid"
                width="16"
                color="#111625"
              />
            </button>
          </div>
          {/* 목록보기 */}
          <div
            className="p-1 bg-white cursor-pointer rounded-[6px]"
            onClick={() => {}}
          >
            <Icon
              icon="heroicons:bars-arrow-down-16-solid"
              width="16"
              color="#111625"
            />
          </div>
          {/* 전체닫기 */}
          <div
            className="p-1 bg-white cursor-pointer rounded-[6px]"
            onClick={() => {
              setTabMenuReset();
              navigate("/dashboard");
            }}
          >
            {/* <p className="text-xs">전체닫기</p> */}
            <Icon icon="heroicons:x-mark-16-solid" width="16" color="#111625" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TabMenu;

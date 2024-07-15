import { Icon } from "@iconify/react";
import useTabMenu from "../../hooks/useTabMenu";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { tabMenuState } from "../../states/tabMenu/tabMenuAtom";

const TabMenu = () => {
  const navigate = useNavigate();
  const { activeTab, tabMenu, handleTabOpen, handleTabClose } = useTabMenu();
  const setTabMenuReset = useResetRecoilState(tabMenuState);

  return (
    <div className="relative">
      <div className="flex-none overflow-x-auto bg-custom-gray-100">
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
                {tab.href !== "hm/HMM001L" && (
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
      {/* 전체닫기 */}
      <div
        className="absolute px-1 py-0.5 flex items-center -translate-y-1/2 bg-white cursor-pointer right-2 top-4"
        onClick={() => {
          setTabMenuReset();
          navigate("/hm/HMM001L");
        }}
      >
        <p className="text-xs">전체닫기</p>
        {/* <Icon icon="heroicons:x-mark-16-solid" width="16" color="#111625" /> */}
      </div>
    </div>
  );
};

export default TabMenu;

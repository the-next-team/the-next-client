import { Icon } from "@iconify/react";
import useTabMenu from "../../hooks/useTabMenu";
import { TabMenuListType } from "../../states/layout/layoutAtom";

const TabMenu = ({
  tabMenu,
  setTabMenu,
}: {
  tabMenu: TabMenuListType;
  setTabMenu: (tabMenu: TabMenuListType) => void;
}) => {
  const { activeTab, handleTabOpen, handleTabClose } = useTabMenu();

  return (
    <div className="flex-none overflow-x-auto bg-custom-gray-100">
      <div className="flex w-fit">
        {tabMenu.map((tab, index) => (
          <button
            className="h-8 cursor-pointer"
            key={index}
            onClick={() => handleTabOpen(tabMenu, setTabMenu, tab)}
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
              {tab.href !== "home/dashboard" && (
                <div
                  className="rounded-full p-0.5"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTabClose(tabMenu, setTabMenu, tab.href);
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
  );
};

export default TabMenu;

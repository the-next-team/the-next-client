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
  const { activeTab, setActiveTab, handleTabClose } = useTabMenu();

  return (
    <div className="overflow-x-auto bg-black-200">
      <div className="flex border-r divide-x w-fit">
        {tabMenu.map((tab, index) => (
          <button className="h-8 cursor-pointer" key={index} onClick={() => setActiveTab(tab.href)}>
            <div
              className={`flex items-center h-full gap-2 px-4 ${
                tab.href === activeTab ? "bg-white" : "bg-black-200"
              }`}
            >
              <p className="text-xs whitespace-nowrap">{tab.name}</p>
              {tab.href !== "home/dashboard" && (
                <div
                  className="rounded-full cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTabClose(tabMenu, setTabMenu, tab.href);
                  }}
                >
                  <Icon icon="heroicons:x-mark-16-solid" width="20px" />
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

import { Icon } from "@iconify/react";
import { useRecoilValue } from "recoil";
import useTabMenu from "../../../hooks/useTabMenu";
import {
  CurrentSideMenu,
  currentSideMenuState,
} from "../../../states/sidebar/sidebarAtom";
import { useState } from "react";

export type MenuItemType = {
  title: string;
  icon?: string;
  link?: string;
  child?: MenuItemChildType[];
};

export type MenuItemChildType = {
  childtitle?: string;
  childlink?: string;
};

export const sampleMenuItems: MenuItemType[] = [
  {
    title: "Pages",
  },
  {
    title: "Components",
    icon: "heroicons-outline:collection",
    child: [
      {
        childtitle: "Card",
        childlink: "example/components/card/CardPage",
      },
    ],
  },
  {
    title: "Chart",
    icon: "heroicons-outline:chart-bar",
    child: [
      {
        childtitle: "Apex chart",
        childlink: "example/chart/appex-chart/AppexChartPage",
      },
    ],
  },
];

function SampleMenu() {
  const { activeTab, handleTabOpen } = useTabMenu();
  const currentSideMenu = useRecoilValue<CurrentSideMenu>(currentSideMenuState);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  return (
    <div
      className={`w-[215px] h-full overflow-y-auto shadow-md ${
        currentSideMenu === "sample" ? "block" : "hidden pointer-events-none"
      }`}
    >
      <ul>
        {sampleMenuItems.map((item, index) => (
          <li key={index}>
            {!item.child && !item.link ? (
              <div className="px-4 py-2">
                <p className="text-sm font-medium text-custom-black">
                  {item.title}
                </p>
              </div>
            ) : (
              <div>
                <div
                  className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    activeTab === item.link
                      ? "bg-primary-800 bg-opacity-[0.07]"
                      : activeSubmenu === index
                        ? "bg-gray-100"
                        : "hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    if (item.child) {
                      if (activeSubmenu === index) {
                        setActiveSubmenu(null);
                      } else {
                        setActiveSubmenu(index);
                      }
                    } else {
                      handleTabOpen({
                        name: item.title ?? "",
                        href: item.link ?? "",
                      });
                    }
                  }}
                >
                  {item.icon && (
                    <Icon icon={item.icon} width="16" color="#111625" />
                  )}
                  <div className="flex items-center justify-between w-full">
                    <p className="text-sm font-medium text-custom-black">
                      {item.title}
                    </p>
                    {item.child && (
                      <div
                        className={`duration-300 ${
                          activeSubmenu === index ? "rotate-90" : ""
                        }`}
                      >
                        <Icon
                          icon="heroicons-outline:chevron-right"
                          width={16}
                          color={
                            activeSubmenu === index ? "#111625" : "#8a8a8a"
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>
                <ul
                  className={`${
                    activeSubmenu === index
                      ? "block"
                      : "hidden pointer-events-none"
                  } items-center gap-2 px-4 cursor-pointer`}
                >
                  {item.child?.map((child, index) => {
                    return (
                      <li
                        key={index}
                        className={`py-2 pl-6 ${
                          activeTab === child.childlink
                            ? "text-primary-800"
                            : ""
                        }`}
                        onClick={() => {
                          handleTabOpen({
                            name: child.childtitle ?? "",
                            href: child.childlink ?? "",
                          });
                        }}
                      >
                        <p className="text-sm font-medium">
                          {child.childtitle}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SampleMenu;

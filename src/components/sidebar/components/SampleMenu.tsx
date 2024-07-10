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
    title: "menu",
  },
  // {
  //   title: "Dashboard",
  //   icon: "heroicons-outline:home",
  //   child: [
  //     {
  //       childtitle: "Analytics Dashboard",
  //       childlink: "dashboard",
  //     },
  //     {
  //       childtitle: "Ecommerce Dashboard",
  //       childlink: "ecommerce",
  //     },
  //     {
  //       childtitle: "Project  Dashbaord",
  //       childlink: "project",
  //     },
  //     {
  //       childtitle: " CRM Dashbaord",
  //       childlink: "crm",
  //     },
  //     {
  //       childtitle: "Banking Dashboard",
  //       childlink: "banking",
  //     },
  //   ],
  // },
  {
    title: "changelog",
    icon: "heroicons:arrow-trending-up",
    link: "example/changelog/ChangeLog",
  },
  {
    title: "apps",
  },
  {
    title: "Chat",
    icon: "heroicons-outline:chat",
    link: "example/chat/ChatPage",
  },
  // {
  //   title: "Email",
  //   icon: "heroicons-outline:mail",
  //   link: "email",
  // },
  // {
  //   title: "Kanban",
  //   icon: "heroicons-outline:view-boards",
  //   link: "kanban",
  // },
  // {
  //   title: "Calender",
  //   icon: "heroicons-outline:calendar",
  //   link: "calender",
  // },
  {
    title: "Todo",
    icon: "heroicons-outline:clipboard-check",
    link: "example/todo/TodoPage",
  },
  // {
  //   title: "Projects",
  //   icon: "heroicons-outline:document",
  //   child: [
  //     {
  //       childtitle: "Projects",
  //       childlink: "projects",
  //     },
  //     {
  //       childtitle: "Project Details",
  //       childlink: "project-details",
  //     },
  //   ],
  // },
  {
    title: "Pages",
  },
  // {
  //   title: "Authentication",
  //   icon: "heroicons-outline:lock-closed",
  //   child: [
  //     {
  //       childtitle: "Signin One",
  //       childlink: "/",
  //     },
  //     {
  //       childtitle: "Signin Two",
  //       childlink: "/login2",
  //     },
  //     {
  //       childtitle: "Signin Three",
  //       childlink: "/login3",
  //     },
  //     {
  //       childtitle: "Signup One",
  //       childlink: "/reg",
  //     },
  //     {
  //       childtitle: "Signup Two",
  //       childlink: "/reg2",
  //     },
  //     {
  //       childtitle: "Signup Three",
  //       childlink: "/reg3",
  //     },
  //     {
  //       childtitle: "Forget Password One",
  //       childlink: "/forgot-password",
  //     },
  //     {
  //       childtitle: "Forget Password Two",
  //       childlink: "/forgot-password2",
  //     },
  //     {
  //       childtitle: "Forget Password Three",
  //       childlink: "/forgot-password3",
  //     },
  //     {
  //       childtitle: "Lock Screen One",
  //       childlink: "/lock-screen",
  //     },
  //     {
  //       childtitle: "Lock Screen Two",
  //       childlink: "/lock-screen2",
  //     },
  //     {
  //       childtitle: "Lock Screen Three",
  //       childlink: "/lock-screen3",
  //     },
  //   ],
  // },
  // {
  //   title: "Utility",
  //   icon: "heroicons-outline:view-boards",
  //   child: [
  //     {
  //       childtitle: "Invoice",
  //       childlink: "invoice",
  //     },
  //     {
  //       childtitle: "Pricing",
  //       childlink: "pricing",
  //     },
  //     // {
  //     //   childtitle: "Testimonial",
  //     //   childlink: "testimonial",
  //     // },
  //     {
  //       childtitle: "FAQ",
  //       childlink: "faq",
  //     },
  //     {
  //       childtitle: "Blog",
  //       childlink: "blog",
  //     },
  //     {
  //       childtitle: "Blank page",
  //       childlink: "blank-page",
  //     },
  //     {
  //       childtitle: "Prfoile",
  //       childlink: "profile",
  //     },
  //     {
  //       childtitle: "Settings",
  //       childlink: "settings",
  //     },
  //     {
  //       childtitle: "404 page",
  //       childlink: "/404",
  //     },
  //     {
  //       childtitle: "Coming Soon",
  //       childlink: "/coming-soon",
  //     },
  //     {
  //       childtitle: "Under Maintanance page",
  //       childlink: "/under-construction",
  //     },
  //   ],
  // },
  {
    title: "Widgets",
    icon: "heroicons-outline:view-grid-add",
    child: [
      {
        childtitle: "Basic",
        childlink: "example/widget/BasicWidget",
      },
      {
        childtitle: "Statistic",
        childlink: "example/widget/StatisticWidget",
      },
    ],
  },
  {
    title: "Components",
    icon: "heroicons-outline:collection",
    child: [
      {
        childtitle: "Typography",
        childlink: "example/components/typography/Typography",
      },
      {
        childtitle: "Colors",
        childlink: "example/components/colors/Colors",
      },
      {
        childtitle: "Alert",
        childlink: "example/components/alert/AlertPage",
      },
      {
        childtitle: "Button",
        childlink: "example/components/button/ButtonPage",
      },
      {
        childtitle: "Card",
        childlink: "example/components/card/CardPage",
      },
      {
        childtitle: "Carousel",
        childlink: "example/components/carousel/CarouselPage",
      },
      {
        childtitle: "Dropdown",
        childlink: "example/components/dropdown/DropdownPage",
      },
      {
        childtitle: "Image",
        childlink: "example/components/image/ImagePage",
      },
      {
        childtitle: "Modal",
        childlink: "example/components/modal/ModalPage",
      },
      {
        childtitle: "Progress bar",
        childlink: "example/components/progress/ProgressPage",
      },
      {
        childtitle: "Placeholder",
        childlink: "example/components/placeholder/PlaceholderPage",
      },
      {
        childtitle: "Tab & Accordion",
        childlink: "example/components/accordion/AccordionPage",
      },
      {
        childtitle: "Badges",
        childlink: "example/components/badge/BadgePage",
      },
      {
        childtitle: "Paginatins",
        childlink: "example/components/pagination/PaginationPage",
      },
      {
        childtitle: "Video",
        childlink: "example/components/video/VideoPage",
      },
      {
        childtitle: "Tooltip & Popover",
        childlink: "example/components/tooltip/TooltipPage",
      },
    ],
  },
  {
    title: "Forms",
    icon: "heroicons-outline:clipboard-list",
    child: [
      {
        childtitle: "Input",
        childlink: "example/form/InputPage",
      },
      {
        childtitle: "Input group",
        childlink: "example/form/InputGroupPage",
      },
      {
        childtitle: "Input layout",
        childlink: "example/form/InputLayoutPage",
      },
      {
        childtitle: "Form validation",
        childlink: "example/form/validation/FormValidationPage",
      },
      {
        childtitle: "Wizard",
        childlink: "example/form/wizard/FormWizardPage",
      },
      {
        childtitle: "Input mask",
        childlink: "example/form/InputMaskPage",
      },
      {
        childtitle: "File input",
        childlink: "example/form/file/FileInputPage",
      },
      {
        childtitle: "Form repeater",
        childlink: "example/form/FormRepeaterPage",
      },
      {
        childtitle: "Textarea",
        childlink: "example/form/TextareaPage",
      },
      {
        childtitle: "Checkbox",
        childlink: "example/form/CheckboxPage",
      },
      {
        childtitle: "Radio button",
        childlink: "example/form/RadioButtonPage",
      },
      {
        childtitle: "Switch",
        childlink: "example/form/SwitchPage",
      },
      {
        childtitle: "Select & Vue select",
        childlink: "example/form/select/SelectPage",
      },
      {
        childtitle: "Date time picker",
        childlink: "example/form/DateTimePickerPage",
      },
    ],
  },
  {
    title: "Table",
    icon: "heroicons-outline:table",
    child: [
      {
        childtitle: "Basic Table",
        childlink: "example/table/BasicTablePage",
      },
      {
        childtitle: "React Table",
        childlink: "react-table",
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
      {
        childtitle: "Chart js",
        childlink: "chartjs",
      },
      {
        childtitle: "Recharts",
        childlink: "recharts",
      },
    ],
  },
  {
    title: "Map",
    icon: "heroicons-outline:map",
    link: "example/map/MapPage",
  },
  {
    title: "Icons",
    icon: "heroicons-outline:emoji-happy",
    link: "example/icon/IconsPage",
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
                            : activeSubmenu === index
                            ? "text-gray-100"
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

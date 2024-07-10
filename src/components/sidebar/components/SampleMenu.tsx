import { useRecoilValue } from "recoil";
import {
  CurrentSideMenu,
  currentSideMenuState,
} from "../../../states/sidebar/sidebarAtom";
import useTabMenu from "../../../hooks/useTabMenu";
import { Icon } from "@iconify/react";

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
  // {
  //   title: "menu",
  // },
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
  // {
  //   title: "apps",
  // },
  // {
  //   title: "Chat",
  //   icon: "heroicons-outline:chat",
  //   link: "chat",
  // },
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
  // {
  //   title: "Todo",
  //   icon: "heroicons-outline:clipboard-check",
  //   link: "todo",
  // },
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
  // {
  //   title: "Pages",
  // },
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
  // {
  //   title: "Widgets",
  //   icon: "heroicons-outline:view-grid-add",
  //   child: [
  //     {
  //       childtitle: "Basic",
  //       childlink: "basic",
  //     },
  //     {
  //       childtitle: "Statistic",
  //       childlink: "statistic",
  //     },
  //   ],
  // },
  // {
  //   title: "Components",
  //   icon: "heroicons-outline:collection",
  //   child: [
  //     {
  //       childtitle: "Typography",
  //       childlink: "typography",
  //     },
  //     {
  //       childtitle: "Colors",
  //       childlink: "colors",
  //     },
  //     {
  //       childtitle: "Alert",
  //       childlink: "alert",
  //     },
  //     {
  //       childtitle: "Button",
  //       childlink: "button",
  //     },
  //     {
  //       childtitle: "Card",
  //       childlink: "card",
  //     },
  //     {
  //       childtitle: "Carousel",
  //       childlink: "carousel",
  //     },
  //     {
  //       childtitle: "Dropdown",
  //       childlink: "dropdown",
  //     },
  //     {
  //       childtitle: "Image",
  //       childlink: "image",
  //     },
  //     {
  //       childtitle: "Modal",
  //       childlink: "modal",
  //     },
  //     {
  //       childtitle: "Progress bar",
  //       childlink: "progress-bar",
  //     },
  //     {
  //       childtitle: "Placeholder",
  //       childlink: "placeholder",
  //     },
  //     {
  //       childtitle: "Tab & Accordion",
  //       childlink: "tab-accordion",
  //     },
  //     {},
  //     {
  //       childtitle: "Paginatins",
  //       childlink: "paginations",
  //     },
  //     {
  //       childtitle: "Video",
  //       childlink: "video",
  //     },
  //     {
  //       childtitle: "Tooltip & Popover",
  //       childlink: "tooltip-popover",
  //     },
  //   ],
  // },
  // {
  //   title: "Forms",
  //   icon: "heroicons-outline:clipboard-list",
  //   child: [
  //     {
  //       childtitle: "Input",
  //       childlink: "input",
  //     },
  //     {
  //       childtitle: "Input group",
  //       childlink: "input-group",
  //     },
  //     {
  //       childtitle: "Input layout",
  //       childlink: "input-layout",
  //     },
  //     {
  //       childtitle: "Form validation",
  //       childlink: "form-validation",
  //     },
  //     {
  //       childtitle: "Wizard",
  //       childlink: "form-wizard",
  //     },
  //     {
  //       childtitle: "Input mask",
  //       childlink: "input-mask",
  //     },
  //     {
  //       childtitle: "File input",
  //       childlink: "file-input",
  //     },
  //     {
  //       childtitle: "Form repeater",
  //       childlink: "form-repeater",
  //     },
  //     {
  //       childtitle: "Textarea",
  //       childlink: "textarea",
  //     },
  //     {
  //       childtitle: "Checkbox",
  //       childlink: "checkbox",
  //     },
  //     {
  //       childtitle: "Radio button",
  //       childlink: "radio-button",
  //     },
  //     {
  //       childtitle: "Switch",
  //       childlink: "switch",
  //     },
  //     {
  //       childtitle: "Select & Vue select",
  //       childlink: "select",
  //     },
  //     {
  //       childtitle: "Date time picker",
  //       childlink: "date-time-picker",
  //     },
  //   ],
  // },
  // {
  //   title: "Table",
  //   icon: "heroicons-outline:table",
  //   child: [
  //     {
  //       childtitle: "Basic Table",
  //       childlink: "table-basic",
  //     },
  //     {
  //       childtitle: "React Table",
  //       childlink: "react-table",
  //     },
  //   ],
  // },
  // {
  //   title: "Chart",
  //   icon: "heroicons-outline:chart-bar",
  //   child: [
  //     {
  //       childtitle: "Apex chart",
  //       childlink: "appex-chart",
  //     },
  //     {
  //       childtitle: "Chart js",
  //       childlink: "chartjs",
  //     },
  //     {
  //       childtitle: "Recharts",
  //       childlink: "recharts",
  //     },
  //   ],
  // },
  // {
  //   title: "Map",
  //   icon: "heroicons-outline:map",
  //   link: "map",
  // },
  // {
  //   title: "Icons",
  //   icon: "heroicons-outline:emoji-happy",
  //   link: "icons",
  // },
];

function SampleMenu() {
  const { activeTab, handleTabOpen } = useTabMenu();
  const currentSideMenu = useRecoilValue<CurrentSideMenu>(currentSideMenuState);
  return (
    <div
      className={`w-[215px] h-full overflow-y-auto shadow-md ${
        currentSideMenu === "sample" ? "block" : "hidden pointer-events-none"
      }`}
    >
      <ul>
        {sampleMenuItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${
              activeTab === item.link ? "bg-primary bg-opacity-[0.07]" : ""
            }`}
            onClick={() => {
              handleTabOpen({
                name: item.title ?? "",
                href: item.link ?? "",
              });
            }}
          >
            {item.icon && <Icon icon={item.icon} width="16" color="#111625" />}
            <p className="text-sm font-medium text-custom-black">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SampleMenu;

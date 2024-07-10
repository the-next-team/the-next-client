import { MenuItemType } from "./data";

export const menuItems: MenuItemType[] = [
    {
      isHeadr: true,
      title: "menu",
    },
    {
      title: "Dashboard",
      icon: "heroicons-outline:home",
      link: "#",
      isHide: true,
      child: [
        {
          childtitle: "Analytics Dashboard",
          childlink: "dashboard",
          childElement: null,
        },
        {
          childtitle: "Ecommerce Dashboard",
          childlink: "ecommerce",
          childElement: null,
        },
        {
          childtitle: "Project  Dashbaord",
          childlink: "project",
          childElement: null,
        },
        {
          childtitle: " CRM Dashbaord",
          childlink: "crm",
          childElement: null,
        },
        {
          childtitle: "Banking Dashboard",
          childlink: "banking",
        //   childElement: BankingPage,
        },
      ],
    },
    {
      title: "changelog",
      icon: "heroicons:arrow-trending-up",
      link: "changelog",
      isHide: false,
      badge: "1.0.0",
    },
    {
      isHeadr: true,
      title: "apps",
    },

    {
      title: "Chat",
      isHide: true,
      icon: "heroicons-outline:chat",
      link: "chat",
    //   element: ChatPage,
    },

    {
      title: "Email",
      isHide: true,
      icon: "heroicons-outline:mail",
      link: "email",
      element: null,
    },

    {
      title: "Kanban",
      isHide: true,
      icon: "heroicons-outline:view-boards",
      link: "kanban",
      element: null,
    },
    {
      title: "Calender",
      isHide: true,
      icon: "heroicons-outline:calendar",
      link: "calender",
      element: null,
    },

    {
      title: "Todo",
      isHide: true,
      icon: "heroicons-outline:clipboard-check",
      link: "todo",
    //   element: TodoPage,
    },

    {
      title: "Projects",
      icon: "heroicons-outline:document",
      link: "#",
      isHide: true,
      child: [
        {
          childtitle: "Projects",
          childlink: "projects",
          childElement: null,
        },
        {
          childtitle: "Project Details",
          childlink: "project-details",
          childElement: null,
        },
      ],
    },
    {
      title: "Ecommerce",
      icon: "heroicons:shopping-bag",
      link: "#",
      child: [
        {
          childtitle: "User App",

          multi_menu: [
            {
              multiTitle: "Products",
              multiLink: "products",
              multiElement: null,
            },
            {
              multiTitle: "Products Details",
              multiLink: "products/1",
              multiElement: null,
            },

            {
              multiTitle: "Cart",
              multiLink: "cart",
              multiElement: null,
            },
            {
              multiTitle: "Wishlist",
              multiLink: "wishlist",
              multiElement: null,
            },
          ],
        },
        {
          childtitle: "Admin App",

          multi_menu: [
            {
              multiTitle: "Orders",
              multiLink: "orders",
              multiElement: null,
              badge: "soon",
            },

            {
              multiTitle: "Add Product",
              multiLink: "add-product",
              multiElement: null,
              badge: "soon",
            },
            {
              multiTitle: "Edit Product",
              multiLink: "edit-product",
              multiElement: null,
              badge: "soon",
            },
            {
              multiTitle: "Customers",
              multiLink: "customers",
              multiElement: null,
              badge: "soon",
            },
            {
              multiTitle: "Sellers",
              multiLink: "sellers",
              multiElement: null,
              badge: "soon",
            },
            {
              multiTitle: "Invoice",
              multiLink: "invoice-ecommerce",
              multiElement: null,
              badge: "soon",
            },
          ],
        },
      ],
    },
    {
      isHeadr: true,
      title: "Pages",
    },
    {
      title: "Authentication",
      icon: "heroicons-outline:lock-closed",
      link: "#",
      child: [
        {
          childtitle: "Signin One",
          childlink: "/",
          childElement: null,
        },
        {
          childtitle: "Signin Two",
          childlink: "/login2",
          childElement: null,
        },
        {
          childtitle: "Signin Three",
          childlink: "/login3",
          childElement: null,
        },
        {
          childtitle: "Signup One",
          childlink: "/reg",
          childElement: null,
        },
        {
          childtitle: "Signup Two",
          childlink: "/reg2",
          childElement: null,
        },
        {
          childtitle: "Signup Three",
          childlink: "/reg3",
          childElement: null,
        },
        {
          childtitle: "Forget Password One",
          childlink: "/forgot-password",
          childElement: null,
        },
        {
          childtitle: "Forget Password Two",
          childlink: "/forgot-password2",
          childElement: null,
        },
        {
          childtitle: "Forget Password Three",
          childlink: "/forgot-password3",
          childElement: null,
        },
        {
          childtitle: "Lock Screen One",
          childlink: "/lock-screen",
          childElement: null,
        },
        {
          childtitle: "Lock Screen Two",
          childlink: "/lock-screen2",
          childElement: null,
        },
        {
          childtitle: "Lock Screen Three",
          childlink: "/lock-screen3",
          childElement: null,
        },
      ],
    },
    {
      title: "Utility",
      icon: "heroicons-outline:view-boards",
      link: "#",
      isHide: false,
      child: [
        {
          childtitle: "Invoice",
          childlink: "invoice",
          childElement: null,
        },
        {
          childtitle: "Pricing",
          childlink: "pricing",
          childElement: null,
        },
        // {
        //   childtitle: "Testimonial",
        //   childlink: "testimonial",
        //   childElement: null
        // },
        {
          childtitle: "FAQ",
          childlink: "faq",
          childElement: null,
        },
        {
          childtitle: "Blog",
          childlink: "blog",
          childElement: null,
        },
        {
          childtitle: "Blank page",
          childlink: "blank-page",
          childElement: null,
        },
        {
          childtitle: "Prfoile",
          childlink: "profile",
          childElement: null,
        },
        {
          childtitle: "Settings",
          childlink: "settings",
          childElement: null,
        },
        {
          childtitle: "404 page",
          childlink: "/404",
          childElement: null,
        },

        {
          childtitle: "Coming Soon",
          childlink: "/coming-soon",
          childElement: null,
        },
        {
          childtitle: "Under Maintanance page",
          childlink: "/under-construction",
          childElement: null,
        },
      ],
    },
    {
      isHeadr: true,
      title: "Elements",
    },
    {
      title: "Widgets",
      icon: "heroicons-outline:view-grid-add",
      link: "#",
      child: [
        {
          childtitle: "Basic",
          childlink: "basic",
          childElement: null,
        },
        {
          childtitle: "Statistic",
          childlink: "statistic",
          childElement: null,
        },
      ],
    },
    {
      title: "Components",
      icon: "heroicons-outline:collection",
      link: "#",
      child: [
        {
          childtitle: "Typography",
          childlink: "typography",
        //   childElement: Typography,
        },
        {
          childtitle: "Colors",
          childlink: "colors",
        //   childElement: Colors,
        },
        {
          childtitle: "Alert",
          childlink: "alert",
        //   childElement: AlertPage,
        },
        {
          childtitle: "Button",
          childlink: "button",
        //   childElement: ButtonPage,
        },
        {
          childtitle: "Card",
          childlink: "card",
        //   childElement: CardPage,
        },
        {
          childtitle: "Carousel",
          childlink: "carousel",
        //   childElement: CarouselPage,
        },
        {
          childtitle: "Dropdown",
          childlink: "dropdown",
        //   childElement: DropdownPage,
        },
        {
          childtitle: "Image",
          childlink: "image",
        //   childElement: ImagePage,
        },
        {
          childtitle: "Modal",
          childlink: "modal",
        //   childElement: ModalPage,
        },
        {
          childtitle: "Progress bar",
          childlink: "progress-bar",
        //   childElement: ProgressPage,
        },
        {
          childtitle: "Placeholder",
          childlink: "placeholder",
        //   childElement: PlaceholderPage,
        },
        {
          childtitle: "Tab & Accordion",
          childlink: "tab-accordion",
        //   childElement: AccordionPage,
        },
        {
          childtitle: "Badges",
          childlink: "badges",
        //   childElement: BadgePage,
        },
        {
          childtitle: "Paginatins",
          childlink: "paginations",
        //   childElement: PaginationPage,
        },
        {
          childtitle: "Video",
          childlink: "video",
        //   childElement: VideoPage,
        },
        {
          childtitle: "Tooltip & Popover",
          childlink: "tooltip-popover",
        //   childElement: TooltipPage,
        },
      ],
    },
    {
      title: "Forms",
      icon: "heroicons-outline:clipboard-list",
      link: "#",
      child: [
        {
          childtitle: "Input",
          childlink: "input",
        //   childElement: InputPage,
        },
        {
          childtitle: "Input group",
          childlink: "input-group",
        //   childElement: InputGroupPage,
        },
        {
          childtitle: "Input layout",
          childlink: "input-layout",
        //   childElement: InputLayoutPage,
        },
        {
          childtitle: "Form validation",
          childlink: "form-validation",
        //   childElement: FormValidationPage,
        },
        {
          childtitle: "Wizard",
          childlink: "form-wizard",
        //   childElement: FormWizardPage,
        },
        {
          childtitle: "Input mask",
          childlink: "input-mask",
        //   childElement: InputMaskPage,
        },
        {
          childtitle: "File input",
          childlink: "file-input",
        //   childElement: FileInputPage,
        },
        {
          childtitle: "Form repeater",
          childlink: "form-repeater",
        //   childElement: FormRepeaterPage,
        },
        {
          childtitle: "Textarea",
          childlink: "textarea",
        //   childElement: TextareaPage,
        },
        {
          childtitle: "Checkbox",
          childlink: "checkbox",
        //   childElement: CheckboxPage,
        },
        {
          childtitle: "Radio button",
          childlink: "radio-button",
        //   childElement: RadioButtonPage,
        },
        {
          childtitle: "Switch",
          childlink: "switch",
        //   childElement: SwitchPage,
        },
        {
          childtitle: "Select & Vue select",
          childlink: "select",
        //   childElement: SelectPage,
        },
        {
          childtitle: "Date time picker",
          childlink: "date-time-picker",
        //   childElement: DateTimePickerPage,
        },
      ],
    },
    {
      title: "Table",
      icon: "heroicons-outline:table",
      link: "#",
      child: [
        {
          childtitle: "Basic Table",
          childlink: "table-basic",
        //   childElement: BasicTablePage,
        },
        {
          childtitle: "React Table",
          childlink: "react-table",
          childElement: null,
        },
      ],
    },
    {
      title: "Chart",
      icon: "heroicons-outline:chart-bar",
      link: "#",
      child: [
        {
          childtitle: "Apex chart",
          childlink: "appex-chart",
        //   childElement: AppexChartPage,
        },
        {
          childtitle: "Chart js",
          childlink: "chartjs",
          childElement: null,
        },
        {
          childtitle: "Recharts",
          childlink: "recharts",
          childElement: null,
        },
      ],
    },
    {
      title: "Map",
      icon: "heroicons-outline:map",
      link: "map",
    //   element: MapPage,
    },
    {
      title: "Icons",
      icon: "heroicons-outline:emoji-happy",
      link: "icons",
    //   element: IconsPage,
    },
    {
      title: "Multi Level",
      icon: "heroicons:share",
      link: "#null",
      child: [
        {
          childtitle: "Level 1.1",
          childlink: "icons",
          childElement: null,
        },
        {
          childtitle: "Level 1.2",
          childlink: "Level-1",
          multi_menu: [
            {
              multiTitle: "Level 2.1",
              multiLink: "Level-2",
              multiElement: null,
            },
            {
              multiTitle: "Level 2.2",
              multiLink: "Level-2.3",
              multiElement: null,
            },
          ],
        },
      ],
    },
  ];
import { StoryObj } from "@storybook/react/*";
import { HashRouter } from "react-router-dom";
import Alert from "../../../components/alert/ExampleAlert";
import { Link } from "react-router-dom";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    componentSubtitle: "alert",
    docs: {
      description: {
        component: "사용자에게 알림이 왔을때 사용합니다.",
      },
    },
  },
  argTypes: {
    className: {
      description: "스타일",
    },
    disabled: {
      description: "비활성화 여부",
    },
    icon: {
      description: "추가 아이콘",
    },
    text: {
      description: "alert 라벨",
    },
    onClick: {
      description: "클릭시 이벤트",
    },
    type: {
      description: "alert 타입",
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <HashRouter>
        <Story />
      </HashRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default",
  storyName: "",
  args: {
    label: "alert",
  },
};

// Theme Color Alerts
export const ThemeColorAlerts: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Alert label="This is an alert—check it out!" className="alert-primary" />
    <Alert label="This is an alert—check it out!" className="alert-secondary" />
    <Alert label="This is an alert—check it out!" className="alert-success" />
    <Alert label="This is an alert—check it out!" className="alert-danger" />
    <Alert label="This is an alert—check it out!" className="alert-warning" />
    <Alert label="This is an alert—check it out!" className="alert-info" />
    <Alert label="This is an alert—check it out!" className="alert-light" />
    <Alert label="This is an alert—check it out!" className="alert-dark" />
  </div>
);
ThemeColorAlerts.args = {
  ...ThemeColorAlerts.args,
};

// Light Color Alerts
export const LightColorAlerts: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Alert
      label="This is an alert—check it out!"
      className="alert-primary light-mode"
    />
    <Alert
      label="This is an alert—check it out!"
      className="alert-secondary light-mode"
    />
    <Alert
      label="This is an alert—check it out!"
      className="alert-success light-mode"
    />
    <Alert
      label="This is an alert—check it out!"
      className="alert-danger light-mode"
    />
    <Alert
      label="This is an alert—check it out!"
      className="alert-warning light-mode"
    />
    <Alert
      label="This is an alert—check it out!"
      className="alert-info light-mode"
    />
    <Alert
      label="This is an alert—check it out!"
      className="alert-light light-mode"
    />
    <Alert
      label="This is an alert—check it out!"
      className="alert-dark light-mode"
    />
  </div>
);
LightColorAlerts.args = {
  ...LightColorAlerts.args,
};

//Link Colors
export const LinkColors: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Alert className="bg-slate-800 bg-opacity-[14%] text-slate-800 dark:bg-slate-500 dark:bg-opacity-[14%]  dark:text-slate-300">
      This is an alert with
      <Link
        to="#"
        className="text-sm font-medium underline text-slate-900 dark:text-slate-300"
      >
        an example link
      </Link>
      .Check it out!
    </Alert>
    <Alert className="bg-primary-500 bg-opacity-[14%] text-primary-500 dark:bg-primary-500 dark:bg-opacity-[14%]">
      This is an alert with
      <Link to="#" className="text-sm font-medium underline text-primary-500">
        an example link
      </Link>
      .Click It out!
    </Alert>
    <Alert className="bg-secondary-500 bg-opacity-[14%] text-slate-600 dark:bg-secondary-500 dark:bg-opacity-[14%]">
      This is an alert with
      <Link to="#" className="text-sm font-medium underline text-slate-600">
        an example link
      </Link>
      .Click It out!
    </Alert>
    <Alert className="bg-success-500 bg-opacity-[14%] text-success-500 dark:bg-success-500 dark:bg-opacity-[14%]">
      This is an alert with
      <Link to="#" className="text-sm font-medium underline text-success-500">
        an example link
      </Link>
      .Click It out!
    </Alert>
    <Alert className="bg-info-500 bg-opacity-[14%] text-info-500 dark:bg-info-500 dark:bg-opacity-[14%]">
      This is an alert with
      <Link to="#" className="text-sm font-medium underline text-info-500">
        an example link
      </Link>
      .Click It out!
    </Alert>
    <Alert className="bg-warning-500 bg-opacity-[14%] text-warning-500 dark:bg-warning-500 dark:bg-opacity-[14%]">
      This is an alert with
      <Link to="#" className="text-sm font-medium underline text-warning-500">
        an example link
      </Link>
      .Click It out!
    </Alert>
    <Alert className="bg-danger-500 bg-opacity-[14%] text-danger-500 dark:bg-danger-500 dark:bg-opacity-[14%]">
      This is an alert with
      <Link to="#" className="text-sm font-medium underline text-danger-500">
        an example link
      </Link>
      .Click It out!
    </Alert>
  </div>
);
LinkColors.args = {
  ...LinkColors.args,
};

//Dismissible Theme Color Alerts With Icon
export const ThemeIconAlert: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Alert dismissible icon="fluent:target-20-regular">
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="fluent:target-20-regular"
      className="alert-primary"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="heroicons-outline:support"
      className="alert-secondary"
    >
      This is an alert—check it out!
    </Alert>
    <Alert dismissible icon="akar-icons:double-check" className="alert-success">
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="heroicons-outline:exclamation"
      className="alert-danger"
    >
      This is an alert—check it out!
    </Alert>
    <Alert dismissible icon="heroicons-outline:ban" className="alert-warning">
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="heroicons-outline:information-circle"
      className="alert-info"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="heroicons-outline:exclamation"
      className="alert-light"
    >
      This is an alert—check it out!
    </Alert>
  </div>
);
ThemeIconAlert.args = {
  ...ThemeIconAlert.args,
};

//Dismissible Light Color Alerts With Icon
export const LightIconAlert: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Alert
      dismissible
      icon="fluent:target-20-regular"
      className=" alert-dark light-mode"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="fluent:target-20-regular"
      className=" light-mode alert-primary"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="heroicons-outline:support"
      className=" light-mode alert-secondary"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="akar-icons:double-check"
      className=" light-mode alert-success"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="heroicons-outline:exclamation"
      className=" light-mode alert-danger"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="heroicons-outline:ban"
      className=" light-mode alert-warning"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="heroicons-outline:information-circle"
      className=" light-mode alert-info"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="heroicons-outline:exclamation"
      className=" light-mode alert-light"
    >
      This is an alert—check it out!
    </Alert>
  </div>
);
LightIconAlert.args = {
  ...LightIconAlert.args,
};

//Outline Theme Color Alerts
export const OutlineThemeColorAlerts: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Alert
      label="This is an alert—check it out!"
      className="alert-outline-primary"
    />
    <Alert
      label="This is an alert—check it out!"
      className="alert-outline-secondary"
    />
    <Alert
      label="This is an alert—check it out!"
      className="alert-outline-success"
    />
    <Alert
      label="This is an alert—check it out!"
      className="alert-outline-danger"
    />
    <Alert
      label="This is an alert—check it out!"
      className="alert-outline-warning"
    />
    <Alert
      label="This is an alert—check it out!"
      className="alert-outline-info"
    />
    <Alert
      label="This is an alert—check it out!"
      className="alert-outline-light"
    />
    <Alert
      label="This is an alert—check it out!"
      className="alert-outline-dark"
    />
  </div>
);
OutlineThemeColorAlerts.args = {
  ...OutlineThemeColorAlerts.args,
};

//Outline Light Color Alerts With Icon
export const OutlineLightColorAlerts: Story = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    <Alert
      dismissible
      icon="fluent:target-20-regular"
      className="alert-outline-dark"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="fluent:target-20-regular"
      className="alert-outline-primary"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="heroicons-outline:support"
      className="alert-outline-secondary"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="akar-icons:double-check"
      className="alert-outline-success"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="heroicons-outline:exclamation"
      className="alert-outline-danger"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="heroicons-outline:ban"
      className="alert-outline-warning"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="heroicons-outline:information-circle"
      className="alert-outline-info"
    >
      This is an alert—check it out!
    </Alert>
    <Alert
      dismissible
      icon="heroicons-outline:exclamation"
      className="alert-outline-light"
    >
      This is an alert—check it out!
    </Alert>
  </div>
);
OutlineLightColorAlerts.args = {
  ...OutlineLightColorAlerts.args,
};

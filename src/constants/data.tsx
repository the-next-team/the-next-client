
export const colors = {
  primary: "#4669FA",
  secondary: "#A0AEC0",
  danger: "#F1595C",
  black: "#111112",
  warning: "#FA916B",
  info: "#0CE7FA",
  light: "#425466",
  success: "#50C793",
  "gray-f7": "#F7F8FC",
  dark: "#1E293B",
  "dark-gray": "#0F172A",
  gray: "#68768A",
  gray2: "#EEF1F9",
  "dark-light": "#CBD5E1",
};

export type MenuItemType = {
  isHeadr?: boolean;
  title: string;
  icon?: string;
  link?: string;
  element?: React.ComponentType | null;
  badge?: string;
  isOpen?: boolean;
  isHide?: boolean;
  isMultiple?: boolean;
  child?: MenuItemChildType[];
};

export type MenuItemChildType = {
  childtitle?: string;
  childlink?: string;
  childElement?: React.ComponentType | null;
  multi_menu?: MenuItemChildMultiType[];
};

export type MenuItemChildMultiType = {
  multiTitle: string;
  multiLink: string;
  multiElement?: React.ComponentType | null;
  badge?: string;
};
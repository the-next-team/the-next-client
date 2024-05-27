import { addons } from "@storybook/manager-api";
import theme from "./theme";

addons.setConfig({
  theme: theme,
});

addons.setConfig({
  sidebar: {
    filters: {
      patterns: (item: any) => {
        return !item.tags.includes("hideInSidebar");
      },
    },
  },
});

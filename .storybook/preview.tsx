import type { Preview } from "@storybook/react";
import "../src/index.css";
import DocumentationTemplate from "./DocumentationTemplate.mdx";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: false, // 목차 여부
      controls: {
        sort: "requiredFirst", // 정렬
      },
      page: DocumentationTemplate,
    },
    options: {
      storySort: {
        method: "alphabetical",
        includeNames: true,
        order: [
          "Introduction",
          ["*", ["Docs", "Default", "AllTypes"]],
          "Docs Overview",
          ["*", ["Docs", "Default", "AllTypes"]],
          "Foundations",
          ["*", ["Docs", "Default", "AllTypes"]],
          "Components",
          ["*", ["Docs", "Default", "AllTypes"]],
          "Forms",
          ["*", ["Docs", "Default", "AllTypes"]],
          "*",
        ],
      },
    },
  },
};

export default preview;

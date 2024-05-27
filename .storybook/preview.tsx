import type { Preview } from "@storybook/react";
import DocumentationTemplate from "./DocumentationTemplate.mdx";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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
          "가이드",
          "Foundations",
          ["*", ["Docs", "Default", "AllTypes"]],
          "Components",
          ["*", ["Docs", "Default", "AllTypes"]],
          "Forms",
          ["*", ["Docs", "Default", "AllTypes"]],
          "Layout",
          ["*", ["Docs", "Default", "AllTypes"]],
          "Example",
          ["*", ["Docs", "*"]],
          "*",
        ],
      },
    },
  },
};

export default preview;

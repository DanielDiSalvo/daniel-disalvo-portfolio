import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: "portfolio",
      values: [
        {
          name: "portfolio",
          value: "#050505",
        },
        {
          name: "light",
          value: "#ffffff",
        },
      ],
    },

    a11y: {
      test: "todo",
    },
  },
};

export default preview;

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Button from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    href: "#",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "View my work →",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Get in touch",
    variant: "secondary",
  },
};

export const Accent: Story = {
  args: {
    children: "Download CV ↓",
    variant: "accent",
  },
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import ProjectStatus from "./ProjectStatus";

const meta = {
  title: "UI/ProjectStatus",
  component: ProjectStatus,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectStatus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Planned: Story = {
  args: {
    label: "Planned",
  },
};

export const InProgress: Story = {
  args: {
    label: "In progress",
  },
};

export const Completed: Story = {
  args: {
    label: "Completed",
  },
};

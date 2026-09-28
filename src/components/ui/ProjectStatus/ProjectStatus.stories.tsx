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
    status: "planned",
  },
};

export const InProgress: Story = {
  args: {
    status: "in-progress",
  },
};

export const Completed: Story = {
  args: {
    status: "completed",
  },
};

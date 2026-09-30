import type { ProjectStatus as ProjectStatusType } from "@/components/sections/SelectedProjects/types";
import { getTranslations } from "next-intl/server";

type ProjectStatusProps = {
  status: ProjectStatusType;
};

const statusLabels: Record<ProjectStatusType, string> = {
  planned: "Planned",
  "in-progress": "In progress",
  completed: "Completed",
};

const ProjectStatus = async ({ status }: ProjectStatusProps) => {
  const t = await getTranslations("Projects.status");

  return (
    <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
      {t(status)}
    </span>
  );
};

export default ProjectStatus;

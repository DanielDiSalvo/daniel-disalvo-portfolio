import type { ProjectStatus as ProjectStatusType } from "@/components/sections/SelectedProjects/types";

type ProjectStatusProps = {
  status: ProjectStatusType;
};

const statusLabels: Record<ProjectStatusType, string> = {
  planned: "Planned",
  "in-progress": "In progress",
  completed: "Completed",
};

const ProjectStatus = ({ status }: ProjectStatusProps) => {
  return (
    <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
      {statusLabels[status]}
    </span>
  );
};

export default ProjectStatus;

type ProjectStatusProps = {
  label: string;
};

const ProjectStatus = ({ label }: ProjectStatusProps) => {
  return (
    <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
      {label}
    </span>
  );
};

export default ProjectStatus;

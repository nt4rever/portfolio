import { Project } from "../../utils/types";
import "./index.scss";

const VARIANTS = ["pink", "purple", "mix"];

const pickVariant = (slug: string) => {
  const hash = [...slug].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return VARIANTS[hash % VARIANTS.length];
};

const ProjectCover = ({ project }: { project: Project }) => {
  if (project.img) {
    return (
      <img className="project-cover" src={project.img} alt={project.name} />
    );
  }

  return (
    <div
      className={`project-cover project-cover--generated ${pickVariant(
        project.slug
      )}`}
    >
      <h3>{project.name}</h3>
      <p>{project.tags.slice(0, 3).join(" · ")}</p>
    </div>
  );
};

export default ProjectCover;

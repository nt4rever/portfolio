import { useState } from "react";
import ProjectCard from "../../shared/components/ProjectCard";
import ProjectCover from "../../shared/components/ProjectCover";
import Tag from "../../shared/components/Tag";
import { formatPeriod } from "../../shared/utils/format";
import { PROJECTS } from "../../shared/utils/projects";
import { ProjectCategory, ProjectKind } from "../../shared/utils/types";
import "./list.scss";

const CATEGORIES: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "AI", value: "ai" },
];

const KINDS: { label: string; value: ProjectKind | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Client", value: "client" },
  { label: "Personal", value: "personal" },
  { label: "Internal", value: "internal" },
];

const List = () => {
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const [kind, setKind] = useState<ProjectKind | "all">("all");

  const projects = PROJECTS.filter(
    (project) =>
      (category === "all" || project.category.includes(category)) &&
      (kind === "all" || project.kind === kind)
  );

  return (
    <div className="projects__list">
      <div className="projects__list--filters">
        <div className="filter-group">
          <span>Type</span>
          {CATEGORIES.map((item) => (
            <Tag
              key={item.value}
              text={item.label}
              active={category === item.value}
              onClick={() => setCategory(item.value)}
            />
          ))}
        </div>
        <div className="filter-group">
          <span>For</span>
          {KINDS.map((item) => (
            <Tag
              key={item.value}
              text={item.label}
              active={kind === item.value}
              onClick={() => setKind(item.value)}
            />
          ))}
        </div>
      </div>
      {projects.length ? (
        <div className="projects__list--grid">
          {projects.map((project) => (
            <div key={project.slug} className="project-item">
              <ProjectCard to={`/projects/${project.slug}`}>
                <ProjectCover project={project} />
              </ProjectCard>
              <div className="project-item__info">
                <div className="project-item__heading">
                  <h3>{project.name}</h3>
                  <span>{formatPeriod(project.period)}</span>
                </div>
                <p>{project.tagline}</p>
                <div className="project-item__tags">
                  {project.tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="projects__list--empty">
          Nothing here yet. Try another filter!
        </p>
      )}
    </div>
  );
};

export default List;

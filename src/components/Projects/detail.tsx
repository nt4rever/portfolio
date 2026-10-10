import { ArrowLeft, ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import { HeaderSmall } from "../../shared/components";
import Button from "../../shared/components/Button";
import ProjectCover from "../../shared/components/ProjectCover";
import Tag from "../../shared/components/Tag";
import { formatPeriod } from "../../shared/utils/format";
import { PROJECTS } from "../../shared/utils/projects";
import { Project } from "../../shared/utils/types";
import "./detail.scss";

const KIND_LABELS: Record<Project["kind"], string> = {
  client: "Client project",
  personal: "Personal project",
  internal: "Internal project",
};

const Detail = ({ project }: { project: Project }) => {
  const index = PROJECTS.findIndex((item) => item.slug === project.slug);
  const prev = PROJECTS[index - 1];
  const next = PROJECTS[index + 1];

  return (
    <div className="project-detail">
      <Link to="/projects" className="project-detail__back">
        <ArrowLeft size={18} /> All projects
      </Link>
      <div className="project-detail__header">
        <HeaderSmall text={KIND_LABELS[project.kind]} />
        <h1>
          {project.name}
          <span>.</span>
        </h1>
        <p className="period">{formatPeriod(project.period)}</p>
      </div>
      <div className="project-detail__cover">
        <ProjectCover project={project} />
      </div>
      <div className="project-detail__body">
        <section>
          <h2>Overview</h2>
          <p>{project.description}</p>
        </section>
        <section>
          <h2>What I did</h2>
          <ul>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Tech stack</h2>
          <div className="tags">
            {project.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </section>
        {(project.github || project.url) && (
          <section className="links">
            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer">
                <Button text="Live demo" />
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                <Button text="Source code" />
              </a>
            )}
          </section>
        )}
      </div>
      <nav className="project-detail__nav">
        {prev ? (
          <Link to={`/projects/${prev.slug}`} className="prev">
            <ArrowLeft size={18} />
            <span>{prev.name}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={`/projects/${next.slug}`} className="next">
            <span>{next.name}</span>
            <ArrowRight size={18} />
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Detail;

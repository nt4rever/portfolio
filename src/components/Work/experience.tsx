import { HeaderSmall } from "../../shared/components";
import CompanyLogo from "../../shared/components/CompanyLogo";
import Tag from "../../shared/components/Tag";
import { formatPeriod } from "../../shared/utils/format";
import { PROJECTS } from "../../shared/utils/projects";
import { EXPERIENCES } from "../../shared/utils/work";
import "./section.scss";
import "./experience.scss";

const Experience = () => {
  return (
    <div className="work-section">
      <div className="work-section__heading">
        <HeaderSmall text="His journey so far" />
        <h2>
          Experience<span>.</span>
        </h2>
      </div>
      {EXPERIENCES.map((experience) => (
        <div key={experience.company} className="experience">
          <div className="experience__company">
            <CompanyLogo company={experience} />
            <h3>{experience.company}</h3>
          </div>
          <ol className="experience__timeline">
            {experience.roles.map((role) => (
              <li key={role.title} className="role">
                <h4>{role.title}</h4>
                <p className="role__meta">
                  {formatPeriod(role.period)} · {role.location}
                </p>
                <ul>
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="role__projects">
                  <span>Projects</span>
                  {PROJECTS.filter((project) =>
                    role.projects.includes(project.slug)
                  ).map((project) => (
                    <Tag
                      key={project.slug}
                      text={project.name}
                      to={`/projects/${project.slug}`}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default Experience;

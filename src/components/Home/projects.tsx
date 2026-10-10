import { HashLink } from "react-router-hash-link";
import { HeaderSmall } from "../../shared/components";
import TextCards from "../../shared/components/TextCards";
import "./projects.scss";
import ProjectCard from "../../shared/components/ProjectCard";
import ProjectCover from "../../shared/components/ProjectCover";
import { PROJECTS } from "../../shared/utils/projects";
import Button from "../../shared/components/Button";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <div className="home-projects">
        <div className="home-projects__text">
          <img
            src="/images/vectors/boxes.svg"
            alt="Box Vector"
            className="boxes"
          />
          <HeaderSmall text="Let's walk to talk!" />
          <p>
            Some awesome <span>products</span> for the awesome people
          </p>
          <h1>
            Something he has <span>built.</span>
          </h1>
          <div className="arrow">
            <HashLink to={"/#projects"}>
              <img src="/images/vectors/arrows-right.svg" alt="arrow" />
            </HashLink>
          </div>
        </div>
        <div className="home-projects__card">
          <div className="card-item item-1">
            <TextCards
              heading="Websites"
              text=" He adds certain special hidden recipes and making his websites look enticing."
              color="#b8c1ec"
            />
          </div>
          <div className="card-item item-2">
            <TextCards
              heading="Apps"
              text="The art of creating some awesome smartphone applications using Flutter and React Native."
              color="#EEBBC3"
            />
          </div>
          <div className="card-item item-3">
            <TextCards
              heading="UI/UX"
              text="He uses his outstanding engineering abilities to provide users an awesome interface and experience"
              color="#b8c1ec"
            />
          </div>
        </div>
      </div>
      <div className="home-projects--list" id="projects">
        {PROJECTS.filter((project) => project.featured).map((project) => (
          <div key={project.slug}>
            <ProjectCard to={`/projects/${project.slug}`}>
              <ProjectCover project={project} />
            </ProjectCard>
          </div>
        ))}
      </div>
      <div className="home-projects--show-more">
        <Link to={"/projects"}>
          <Button text="Show me more! 🔥" />
        </Link>
      </div>
    </div>
  );
};

export default Projects;

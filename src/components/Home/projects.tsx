import { HashLink } from "react-router-hash-link";
import { HeaderSmall } from "../../shared/components";
import TextCards from "../../shared/components/TextCards";
import "./projects.scss";
import ProjectCard from "../../shared/components/ProjectCard";
import { mockProjects } from "../../shared/utils/constants";
import { Project } from "../../shared/utils/types";

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
              text="The art of creating some awesome smartphone applications using React Native."
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
        {mockProjects.slice(0, 5).map((ele, index) => (
          <div key={index}>
            <ProjectCard project={ele as Project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

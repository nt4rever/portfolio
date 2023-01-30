import { HeaderSmall } from "../../shared/components";
import ProjectCard from "../../shared/components/ProjectCard";
import { Project } from "../../shared/utils/types";
import "./repo.scss";

const Repo = () => {
  return (
    <div className="home-repo">
      <div className="home-repo__text">
        <HeaderSmall text="Loved this website?" />
        <p>
          Loved this portfolio? Make this <span>yours</span> by forking.
        </p>
        <h1>Visit Github Repository</h1>
        <div className="text-small">
          <p>
            *Credits to the owners for the vectors/icons used. These are picked
            from various sources from the internet.
          </p>
          <p>
            *Feel free to fork and make this repo your own, but make sure to
            give credits tothe owner
          </p>
        </div>
      </div>
      <div className="home-repo__link">
        <ProjectCard>
          <div className="repo__container">
            <div className="title">portfolio</div>
            <div className="desc">
              An eye-catching developer Portfolio, Built on NextJS.
            </div>
            <div className="time">
              Last Updated : <span>Sat Jan 28 2023</span>
            </div>
          </div>
        </ProjectCard>
      </div>
    </div>
  );
};

export default Repo;

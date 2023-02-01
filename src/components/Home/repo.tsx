import { AlertTriangle, GitBranch, Star } from "react-feather";
import { HeaderSmall } from "../../shared/components";
import ProjectCard from "../../shared/components/ProjectCard";
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
          <div
            className="repo__container"
            onClick={() => {
              window.open("https://github.com/nt4rever/portfolio");
            }}
          >
            <div className="title">portfolio</div>
            <div className="desc">
              An eye-catching developer Portfolio, Built on ReactJS.
            </div>
            <div className="info">
              <div className="info__item">
                <AlertTriangle />
                <span>0</span>
              </div>
              <div className="info__item">
                <Star />
                <span>0</span>
              </div>
              <div className="info__item">
                <GitBranch />
                <span>1</span>
              </div>
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

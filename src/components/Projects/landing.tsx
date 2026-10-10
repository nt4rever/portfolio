import { HeaderSmall } from "../../shared/components";
import "./landing.scss";

const Landing = () => {
  return (
    <div className="projects__landing">
      <div className="projects__landing--text">
        <HeaderSmall text="What he has built?" />
        <p>
          From cloud-based DX platforms for Japanese clients to AI-powered
          personal projects.
        </p>
        <h1>
          My <span>Projects.</span>
        </h1>
      </div>
      <img src="/images/vectors/boxes.svg" alt="boxes" className="boxes" />
    </div>
  );
};

export default Landing;

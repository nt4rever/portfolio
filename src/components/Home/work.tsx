import { Link } from "react-router-dom";
import { HeaderSmall } from "../../shared/components";
import "./work.scss";
const Work = () => {
  return (
    <div className="work-home__container">
      <img
        src="/images/vectors/circle-spin.svg"
        alt="Circle Vector"
        className="circle"
      />
      <div className="work-home__text">
        <img
          src="/images/vectors/boxes.svg"
          alt="Box Vector"
          className="boxes"
        />
        <HeaderSmall text="What does he do?" />
        <p>
          Currently enhancing traveling at <span>Frontend</span> as a
        </p>
        <h1>Software Developer</h1>
        <div className="arrow">
          <Link to={"/work"}>
            <img src="/images/vectors/arrows-right.svg" alt="arrow" />
          </Link>
        </div>
      </div>
      <div className="work-home__icon">
        <img src="/images/companies/headout.svg" alt="headout" />
      </div>
    </div>
  );
};

export default Work;

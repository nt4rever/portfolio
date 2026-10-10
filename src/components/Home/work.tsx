import { Link } from "react-router-dom";
import { HeaderSmall } from "../../shared/components";
import CompanyLogo from "../../shared/components/CompanyLogo";
import { EXPERIENCES } from "../../shared/utils/work";
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
          Currently building DX solutions at <span>NAPA Global</span> as a
        </p>
        <h1>Software Engineer</h1>
        <div className="arrow">
          <Link to={"/work"}>
            <img src="/images/vectors/arrows-right.svg" alt="arrow" />
          </Link>
        </div>
      </div>
      <div className="work-home__icon">
        <CompanyLogo company={EXPERIENCES[0]} size="lg" />
      </div>
    </div>
  );
};

export default Work;

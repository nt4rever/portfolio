import { HeaderSmall } from "../../shared/components";
import CompanyLogo from "../../shared/components/CompanyLogo";
import { EXPERIENCES } from "../../shared/utils/work";
import "./landing.scss";

const Landing = () => {
  return (
    <div className="work__landing">
      <div className="work__landing--text">
        <HeaderSmall text="Where he has worked?" />
        <p>
          Building scalable backend systems and cloud solutions for Japanese
          clients at NAPA Global.
        </p>
        <h1>
          Work <span>Experience.</span>{" "}
        </h1>
      </div>
      <div className="work__landing-company">
        <CompanyLogo company={EXPERIENCES[0]} size="lg" />
      </div>
      <img
        src="/images/vectors/cylinder.svg"
        alt="cylinder"
        className="cylinder"
      />
    </div>
  );
};

export default Landing;

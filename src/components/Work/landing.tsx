import { HeaderSmall } from "../../shared/components";
import "./landing.scss";

const Landing = () => {
  return (
    <div className="work__landing">
      <div className="work__landing--text">
        <HeaderSmall text="Where he has worked?" />
        <p>
          Worked with several organizations ranging from campus clubs to
          startups.
        </p>
        <h1>
          Work <span>Experience.</span>{" "}
        </h1>
      </div>
      <div className="work__landing-company">company logo</div>
      <img
        src="/images/vectors/cylinder.svg"
        alt="cylinder"
        className="cylinder"
      />
    </div>
  );
};

export default Landing;

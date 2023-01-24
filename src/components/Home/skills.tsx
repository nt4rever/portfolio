import { HeaderSmall } from "../../shared/components";
import { SKILLS } from "../../shared/utils/constants";
import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills__container" id="skills">
      <img
        src="/images/vectors/cylinder.svg"
        alt="cylinder"
        className="cylinder"
      />
      <img
        src="/images/vectors/l-vector.svg"
        alt="l-vector"
        className="l-vector"
      />
      <div className="skills__text">
        <HeaderSmall text="What does he do?" />
        <div className="skills__text--desc">
          He creates elegant, logical web and mobile app solutions. In his hobby
          time, he designs.
        </div>
        <div className="skills__text--slogan">
          Think. <span>Code.</span> Debug.
        </div>
      </div>
      <div className="skills__icon">
        {SKILLS.map((item, index) => (
          <img src={item.src} alt="skill-icon" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

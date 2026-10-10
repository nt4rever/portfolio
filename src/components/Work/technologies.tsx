import { HeaderSmall } from "../../shared/components";
import Tag from "../../shared/components/Tag";
import { TECHNOLOGIES } from "../../shared/utils/work";
import "./section.scss";
import "./technologies.scss";

const Technologies = () => {
  return (
    <div className="work-section">
      <div className="work-section__heading">
        <HeaderSmall text="What does he use?" />
        <h2>
          Technologies<span>.</span>
        </h2>
      </div>
      {TECHNOLOGIES.map((item) => (
        <div key={item.group} className="tech-group">
          <h3>{item.group}</h3>
          <div className="tech-group__items">
            {item.items.map((tech) => (
              <Tag key={tech} text={tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Technologies;

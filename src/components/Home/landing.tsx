import { HeaderSmall } from "../../shared/components";
import "./landing.scss";

const Landing = () => {
  return (
    <div className="landing__container" id="home">
      <img
        className="ellipse"
        src="/images/vectors/ellipse.svg"
        alt="ellipse"
      />

      <div className="landing__personal">
        <img
          className="triangle"
          src="/images/vectors/triangle.svg"
          alt="triangle"
        />
        <HeaderSmall text="Who is he?" />
        <div className="personal__name">nt4rever</div>
        <div className="personal__desc">
          "A SE with passionate with new tech and solutions", this line says exactly who he is. He is a
          software engineer who crafts creative solutions. His perfect
          balance of technical & managerial skills stands him apart from the
          crowd.
        </div>
        <div className="personal__info">
          <div className="info__item">
            <a
              href="https://github.com/nt4rever"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Know more</button>
            </a>
          </div>
          <div className="info__item bg-trans">
            <a
              href="https://drive.google.com/drive/folders/111nakP0uRWDnIt2_f8BZE_qWFZr9z4HL?usp=drive_link"
              target={"_blank"}
            >
              <button>Download resume</button>
            </a>
          </div>
        </div>
      </div>
      <div className="landing__illustration">
        <img src="/images/bob.png" alt="bob" />
      </div>
    </div>
  );
};

export default Landing;

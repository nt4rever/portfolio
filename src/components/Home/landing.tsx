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
          "A fresher with experience", this line says exactly who he is. He is a
          software developer who crafts beautiful web and apps. His perfect
          balance of technical & managerial skills stands him apart from the
          crowd.
        </div>
        <div className="personal__info">
          <div className="info__item">
            <button>Know more</button>
          </div>
          <div className="info__item bg-trans">
            <button>Download resume</button>
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

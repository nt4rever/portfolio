import { Link } from "react-router-dom";
import Button from "../shared/components/Button";
import "./page.scss";

const NotFound404 = () => {
  return (
    <div className="not-found-page">
      <div className="container">
        <p
          dangerouslySetInnerHTML={{ __html: "Hey! You seem to be lost :(" }}
        ></p>
        <h1>
          404. <br /> Not Found.
        </h1>
        <Link to={"/"} style={{ display: "inline-block" }}>
          <Button text="Back to home" />
        </Link>
      </div>
      <img
        src="/images/vectors/404-hero.svg"
        alt="404 hero"
        className="img-hero"
      />
      <img
        src="/images/vectors/404-polygon.svg"
        alt="404 vector"
        className="img-polygon"
      />
    </div>
  );
};

export default NotFound404;

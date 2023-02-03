import { InlineWidget } from "react-calendly";
import "./connect.scss";
const Connect = () => {
  return (
    <div className="connect__container">
      <div className="connect__text">
        <h1>Meet and Greet</h1>
        <p>Schedule a 30 minutes call with me via Google meet.</p>
      </div>
      <div className="connect__calendar">
        <InlineWidget
          styles={{ height: "900px", width: "100%", margin: "auto" }}
          url="https://calendly.com/nt4rever/connect-with-me"
        />
      </div>
    </div>
  );
};

export default Connect;

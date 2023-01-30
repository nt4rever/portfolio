import { HeaderSmall } from "../../shared/components";
import Button from "../../shared/components/Button";
import "./contact.scss";

const Contact = () => {
  return (
    <>
      <div className="home-contact">
        <div className="home-contact__text">
          <HeaderSmall text="Meet and Great!" />
          <p>
            Impressed Already? <span>Schedule</span> a call with him.
          </p>
          <h1>Let’s grab a cup of coffee.</h1>
        </div>
        <div className="home-contact__img">
          <img src="/images/vectors/contact.svg" alt="contact" />
        </div>
      </div>
      <div className="home-contact--button">
        <Button text="Let's Connect! 🚀 " />
      </div>
    </>
  );
};

export default Contact;

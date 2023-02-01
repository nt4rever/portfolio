import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer__left"></div>
      <div className="footer__center">
        Made with<span>❤️</span>by{" "}
        <a
          href="https://github.com/nt4rever"
          target="_blank"
          rel="noopener noreferrer"
        >
          nt4rever
        </a>
      </div>
      <div className="footer__right"></div>
    </footer>
  );
};

export default Footer;

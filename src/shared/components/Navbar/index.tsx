import { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { navLinks } from "../../utils/constants";
import "./index.scss";

const Navbar = () => {
  const location = useLocation();
  const [pathName, setPathName] = useState<string>("/");
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isScreenScrolled, setIsScreenScrolled] = useState(false);

  const addScrollToNav = () => {
    window.scrollY >= 60
      ? setIsScreenScrolled(true)
      : setIsScreenScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", addScrollToNav);
    return () => {
      window.removeEventListener("scroll", addScrollToNav);
    };
  }, []);

  useEffect(() => {
    const currentPath = location.hash
      ? `${location.pathname}`
      : location.pathname;
    setPathName(currentPath);
  }, [location]);

  return (
    <header className={isScreenScrolled ? "isScroll" : undefined}>
      <div className="navbar">
        <div className="navbar__left">
          <HashLink to={"/#home"}>
            <img src="/images/logo.svg" alt="logo" />
          </HashLink>
        </div>
        <div className="navbar__right">
          <ul>
            {navLinks.map((item, index) => (
              <li key={index} className="navbar__item">
                <HashLink
                  to={item.href}
                  className={pathName === item.href ? " active" : ""}
                >
                  {item.title}
                </HashLink>
              </li>
            ))}
          </ul>
          <div className="navbar__menu">
            <button
              type="button"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              {showMobileNav ? <X className="show" /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      <div className={`navbar__mobile ${!showMobileNav ? "hide" : ""}`}>
        <ul>
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={`navbar__item${
                pathName === item.href ? " active" : ""
              }`}
            >
              <HashLink to={item.href}>{item.title}</HashLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

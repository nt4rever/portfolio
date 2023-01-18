import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

const Navbar = () => {
  const location = useLocation();
  const [pathName, setPathName] = useState<string>("/");

  useEffect(() => {
    const currentPath = location.hash
      ? `${location.pathname}${location.hash}`
      : location.pathname;
    setPathName(currentPath);
  }, [location]);

  return (
    <header>
      <div className="navbar">
        <div className="navbar__left">
          <Link to={"/"}>
            <img src="/images/logo-light.svg" alt="" />
          </Link>
        </div>
        <div className="navbar__right">
          <ul>
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`navbar__item${
                  pathName === item.path ? " active" : ""
                }`}
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

const navItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/#skills",
    title: "Explore",
  },
  {
    path: "/work",
    title: "Work",
  },
  {
    path: "/project",
    title: "Project",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

export default Navbar;

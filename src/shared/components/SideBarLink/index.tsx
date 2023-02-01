import { Facebook, GitHub, Instagram, Linkedin, Mail } from "react-feather";
import "./index.scss";

const SideBarLink = () => {
  return (
    <div className="sidebar__link">
      <ul>
        <li>
          <a href="#" target="_blank">
            <Mail />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Linkedin />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <GitHub />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Instagram />
          </a>
        </li>
      </ul>
      <div className="line"></div>
    </div>
  );
};

export default SideBarLink;

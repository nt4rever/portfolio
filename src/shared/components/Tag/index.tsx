import { Link } from "react-router-dom";
import "./index.scss";

type Props = {
  text: string;
  active?: boolean;
  to?: string;
  onClick?: () => void;
};

const Tag = ({ text, active, to, onClick }: Props) => {
  if (to) {
    return (
      <Link to={to} className="tag tag--button">
        {text}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        className={`tag tag--button${active ? " active" : ""}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }

  return <span className="tag">{text}</span>;
};

export default Tag;

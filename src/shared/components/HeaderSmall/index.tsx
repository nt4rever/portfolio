import "./index.scss";

interface Props {
  text: string;
}

const HeaderSmall = ({ text }: Props) => {
  return (
    <div className="header-small">
      <div className="header-small__line"></div>
      <div className="header-small__text gradient-text">{text}</div>
    </div>
  );
};

export default HeaderSmall;

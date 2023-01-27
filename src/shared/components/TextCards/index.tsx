import "./index.scss";

interface Props {
  heading: string;
  text: string;
  color: string;
}

const TextCards = ({ text, heading, color }: Props) => {
  return (
    <div className="text-cards" style={{ background: color }}>
      <div className="text-cards__heading">{heading}</div>
      <div className="text-cards__text">{text}</div>
    </div>
  );
};

export default TextCards;

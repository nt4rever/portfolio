import { useRef } from "react";
import "./index.scss";

const BubbleText = ({ text }: { text: string }) => {
  const spanRefs = useRef<HTMLSpanElement[]>([]);

  const clearHoveredClasses = () => {
    spanRefs.current.map((e) => {
      e.classList.remove("hovered");
      e.classList.remove("hovered-adjacent");
    });
  };

  const onMouseOverHandle = (index: number) => {
    clearHoveredClasses();
    const prevIndex = index === 0 ? null : index - 1;
    const nextIndex = index === text.length - 1 ? null : index + 1;
    spanRefs.current[index].classList.add("hovered");
    if (prevIndex !== null)
      spanRefs.current[prevIndex].classList.add("hovered-adjacent");
    if (nextIndex !== null)
      spanRefs.current[nextIndex].classList.add("hovered-adjacent");
  };

  return (
    <div className="bubble-text">
      {text.split("").map((char, index) => (
        <span
          key={index}
          ref={(ref) => ref && spanRefs.current.push(ref)}
          onMouseOver={() => onMouseOverHandle(index)}
          onMouseLeave={() => {
            clearHoveredClasses();
          }}
          dangerouslySetInnerHTML={{
            __html: `${char != " " ? char : `&nbsp;`}`,
          }}
        ></span>
      ))}
    </div>
  );
};

export default BubbleText;

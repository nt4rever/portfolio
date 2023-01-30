import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const ProjectCard = ({ children }: Props) => {
  const [transformValue, setTransformValue] = useState({
    perspective: 1000,
    scale3d: 1,
    rotateX: 0,
    rotateY: 0,
  });

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = event.target as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const { clientHeight, clientWidth } = target;
    const localX = -x + clientWidth / 2;
    const localY = y - clientHeight / 2;

    setTransformValue({
      ...transformValue,
      scale3d: 1.1,
      rotateY: (10 * localX) / (0.5 * clientWidth),
      rotateX: (10 * localY) / (0.5 * clientHeight),
    });
  };

  const handleMouseLeave = () => {
    setTransformValue({
      perspective: 1000,
      scale3d: 1,
      rotateX: 0,
      rotateY: 0,
    });
  };

  return (
    <div className="project-card">
      <Link
        to={"/#"}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="project-card__container"
          style={{
            transform: `perspective(${transformValue.perspective}px) rotateX(${transformValue.rotateX}deg) rotateY(${transformValue.rotateY}deg)`,
            scale: `${transformValue.scale3d}`,
          }}
        >
          {children}
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;

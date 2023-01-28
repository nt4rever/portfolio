import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Project } from "../../utils/types";
import "./index.scss";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const [transformValue, setTransformValue] = useState({
    perspective: 1000,
    scale3d: 1,
    rotateX: 0,
    rotateY: 0,
  });

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const currentTarget = event.target as HTMLDivElement;
    const { clientHeight, clientWidth } = currentTarget;
    const localX =
      -(event.clientX - currentTarget.offsetLeft) +
      currentTarget.clientWidth / 2;
    const localY =
      event.clientY +
      window.scrollY -
      currentTarget.offsetTop -
      currentTarget.clientHeight / 2;

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
        <img
          src={project.img}
          alt="project-image"
          style={{
            transform: `perspective(${transformValue.perspective}px) rotateX(${transformValue.rotateX}deg) rotateY(${transformValue.rotateY}deg)`,
            scale: `${transformValue.scale3d}`,
          }}
        />
      </Link>
    </div>
  );
};

export default ProjectCard;

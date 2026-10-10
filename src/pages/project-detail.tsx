import { lazy, Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../shared/utils/projects";
import NotFound404 from "./404";
const Detail = lazy(() => import("./../components/Projects/detail"));
import "./page.scss";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = PROJECTS.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    document.title = project ? `${project.name} | tannnguci` : "tannnguci";
    return () => {
      document.title = "tannnguci";
    };
  }, [project]);

  if (!project) {
    return <NotFound404 />;
  }

  return (
    <div className="project-detail-page">
      <Suspense fallback={<div>Loading...</div>}>
        <Detail project={project} />
      </Suspense>
    </div>
  );
};

export default ProjectDetail;

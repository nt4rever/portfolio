import { lazy, Suspense, useEffect } from "react";
const Landing = lazy(() => import("./../components/Projects/landing"));
const List = lazy(() => import("./../components/Projects/list"));
import "./page.scss";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | tannnguci";
    return () => {
      document.title = "tannnguci";
    };
  }, []);

  return (
    <div className="projects-page">
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
        <List />
      </Suspense>
    </div>
  );
};

export default Projects;

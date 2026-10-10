import { lazy, Suspense, useEffect } from "react";
const Landing = lazy(() => import("./../components/Work/landing"));
const Experience = lazy(() => import("./../components/Work/experience"));
const Education = lazy(() => import("./../components/Work/education"));
const Technologies = lazy(() => import("./../components/Work/technologies"));
import "./page.scss";

const Work = () => {
  useEffect(() => {
    document.title = "Work | tannnguci";
    return () => {
      document.title = "tannnguci";
    };
  }, []);

  return (
    <div className="work-page">
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
        <Experience />
        <Education />
        <Technologies />
      </Suspense>
    </div>
  );
};

export default Work;

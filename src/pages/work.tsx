import { lazy, Suspense } from "react";
const Landing = lazy(() => import("./../components/Work/landing"));
import "./page.scss";

const Work = () => {
  return (
    <div className="work-page">
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
      </Suspense>
    </div>
  );
};

export default Work;

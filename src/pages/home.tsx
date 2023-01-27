import { lazy, Suspense } from "react";
import Projects from "../components/Home/projects";
import "./home.scss";
const Landing = lazy(() => import("../components/Home/landing"));
const Skills = lazy(() => import("../components/Home/skills"));
const Work = lazy(() => import("../components/Home/work"));

const Home = () => {
  return (
    <div className="homepage">
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
        <Skills />
        <Work />
        <Projects />
      </Suspense>
    </div>
  );
};

export default Home;

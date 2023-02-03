import { lazy, Suspense } from "react";
import Contact from "../components/Home/contact";
import Projects from "../components/Home/projects";
import Repo from "../components/Home/repo";
import "./page.scss";
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
        <Contact />
        <Repo />
      </Suspense>
    </div>
  );
};

export default Home;

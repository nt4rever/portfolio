import { Route } from "react-router";
import { Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home";
import Work from "../pages/work";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="projects" element={<Work />} />
        <Route path="contact" element={<Work />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;

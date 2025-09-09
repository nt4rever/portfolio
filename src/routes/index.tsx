import { Navigate, Route } from "react-router";
import { Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import NotFound404 from "../pages/404";
import ComingSoon from "../pages/coming-soon";
import Contact from "../pages/contact";
import Home from "../pages/home";
import OAuthHomepage from "../pages/oauth-homepage";
import Privacy from "../pages/privacy";
import Terms from "../pages/terms";
import Work from "../pages/work";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="projects" element={<ComingSoon />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
      </Route>
      <Route path="homepage" element={<OAuthHomepage />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default AppRoute;

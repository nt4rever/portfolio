import { Outlet } from "react-router-dom";
import Footer from "../shared/components/Footer";
import Navbar from "../shared/components/Navbar";
import SideBarLink from "../shared/components/SideBarLink";
import "./index.scss";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <Outlet />
      <SideBarLink />
      <Footer />
    </div>
  );
};

export default MainLayout;

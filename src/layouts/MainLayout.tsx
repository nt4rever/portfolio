import { Outlet } from "react-router-dom";
import Navbar from "../shared/components/Navbar";
import "./index.scss";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;

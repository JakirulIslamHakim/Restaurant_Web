import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  const hideNavFooter =
    currentLocation.includes("login") || currentLocation.includes("singUp");

  return (
    <div className="max-w-7xl mx-auto">
      {hideNavFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {hideNavFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;

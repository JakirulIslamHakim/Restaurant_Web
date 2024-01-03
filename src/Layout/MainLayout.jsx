import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  const hideNavbar = currentLocation.includes("login");
  const hideFooter = currentLocation.includes("singUp");

  return (
    <div className="max-w-7xl mx-auto">
      {hideNavbar || hideFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {hideNavbar || hideFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;

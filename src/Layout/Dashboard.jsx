import { Link, Outlet } from "react-router-dom";
import UserRoutes from "../Component/NavigateRoutes/UserRoutes";
import AdminRoutes from "../Component/NavigateRoutes/AdminRoutes";
import SharedRoutes from "../Component/NavigateRoutes/SharedRoutes";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  //TODO : get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex w-full ">
      <div className="bg-[#D1A054]  w-[300px] min-h-screen p-7 ">
        <div className="  btn-ghost text-2xl my-12 text-center inline-block ">
          <Link to={"/"} className=" flex flex-col uppercase  ">
            <p className="font-black mb-1">Bistro Boos </p>
            <p
              style={{ letterSpacing: "9px" }}
              className="text-sm  font-bold ml-1"
            >
              Restaurant
            </p>
          </Link>
        </div>
        {isAdmin ? <AdminRoutes></AdminRoutes> : <UserRoutes></UserRoutes>}
        <hr className="my-6" />
        <SharedRoutes></SharedRoutes>
      </div>
      <div className="flex-1 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

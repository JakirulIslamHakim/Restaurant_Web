import { RingLoader } from "react-spinners";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RingLoader loading={true} color={"#36D7B7"}></RingLoader>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return (
    <Navigate
      to={"/"}
      replace={true}
      state={{ from: location }}
    ></Navigate>
  );
};

export default AdminRoute;

import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { RingLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RingLoader loading={true} color={"#36D7B7"}></RingLoader>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      to={"/login"}
      replace={true}
      state={{ form: location }}
    ></Navigate>
  );
};

export default PrivateRoute;

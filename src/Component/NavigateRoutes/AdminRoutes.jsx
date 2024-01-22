import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaList, FaBook } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { FaUserGroup } from "react-icons/fa6";

const AdminRoutes = () => {
  return (
    <div className="font-medium space-y-6 p-4 uppercase  ">
      <p>
        <NavLink
          className="flex gap-2 items-center hover:text-white"
          to={"/dashboard/adminHome"}
        >
          <AiFillHome className="text-2xl" />
          Admin Home
        </NavLink>
      </p>
      <p>
        <NavLink
          to={"/dashboard/addItems"}
          className="flex gap-2 items-center hover:text-white"
        >
          <ImSpoonKnife className="text-2xl" />
          add items
        </NavLink>
      </p>
      <p>
        <NavLink
          to={"/dashboard/manageItems"}
          className="flex gap-2 items-center hover:text-white"
        >
          <FaList className="text-2xl" />
          manage items
        </NavLink>
      </p>
      <p>
        <NavLink
          className="flex gap-2 items-center hover:text-white"
          to={"/dashboard/manageBookings"}
        >
          <FaBook className="text-2xl" />
          Manage bookings
        </NavLink>
      </p>
      <p>
        <NavLink
          to={"/dashboard/allUsers"}
          className="flex gap-2 items-center hover:text-white"
        >
          <FaUserGroup className="text-2xl" />
          all users
        </NavLink>
      </p>
    </div>
  );
};

export default AdminRoutes;

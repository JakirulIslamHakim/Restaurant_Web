import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaCalendarAlt, FaRegGrinStars } from "react-icons/fa";
import { IoWalletSharp, IoBookmark } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const UserRoutes = () => {
  return (
    <div className="font-medium space-y-6 p-4 uppercase  ">
      <p>
        <NavLink
          className="flex gap-2 items-center hover:text-white"
          to={"/dashboard/userHome"}
        >
          <AiFillHome className="text-2xl" />
          User Home
        </NavLink>
      </p>
      <p>
        <NavLink
          to={"/dashboard/reservation"}
          className="flex gap-2 items-center hover:text-white"
        >
          <FaCalendarAlt className="text-2xl" />
          reservation
        </NavLink>
      </p>
      <p>
        <NavLink
          to={"/dashboard/paymentHistory"}
          className="flex gap-2 items-center hover:text-white"
        >
          <IoWalletSharp className="text-2xl" />
          payment history
        </NavLink>
      </p>
      <p>
        <NavLink
          className="flex gap-2 items-center hover:text-white"
          to={"/dashboard/cart"}
        >
          <FaCartShopping className="text-2xl" />
          my cart
        </NavLink>
      </p>
      <p>
        <NavLink
          to={"/dashboard/addReview"}
          className="flex gap-2 items-center hover:text-white"
        >
          <FaRegGrinStars className="text-2xl" />
          add review
        </NavLink>
      </p>
      <p>
        <NavLink
          to={"/dashboard/myBooking"}
          className="flex gap-2 items-center hover:text-white"
        >
          <IoBookmark className="text-2xl" />
          my booking
        </NavLink>
      </p>
    </div>
  );
};

export default UserRoutes;

import { Link, NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaCalendarAlt, FaRegGrinStars, FaShoppingBag } from "react-icons/fa";
import {
  IoWalletSharp,
  IoBookmark,
  IoMenu,
  IoMailSharp,
} from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";

const Dashboard = () => {
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
        <hr className="my-6" />
        <div className="font-medium space-y-6 p-4 uppercase">
          <p className="flex gap-2 items-center hover:text-white">
            <AiFillHome className="text-2xl" />
            <NavLink to={"/"}>Home</NavLink>
          </p>
          <p className="flex gap-2 items-center hover:text-white">
            <IoMenu className="text-2xl" />
            <NavLink to={"/ourMenu"}>Menu</NavLink>
          </p>
          <p className="flex gap-2 items-center hover:text-white">
            <FaShoppingBag className="text-2xl" />
            <NavLink to={"/ourShop/salad"}>Shop</NavLink>
          </p>
          <p className="flex gap-2 items-center hover:text-white">
            <IoMailSharp className="text-2xl" />
            <NavLink to={"/contact"}>Contact</NavLink>
          </p>
        </div>
      </div>
      <div className="flex-1 ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

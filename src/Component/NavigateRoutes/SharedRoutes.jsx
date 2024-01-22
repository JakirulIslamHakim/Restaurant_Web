import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { IoMenu, IoMailSharp } from "react-icons/io5";

const SharedRoutes = () => {
  return (
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
  );
};

export default SharedRoutes;

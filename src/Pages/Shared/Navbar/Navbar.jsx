import { Link, NavLink, useNavigate } from "react-router-dom";
import "./navStyle.css";
import useAuth from "../../../hooks/useAuth";
import { FaCartPlus } from "react-icons/fa";
import useCartDate from "../../../hooks/useCartDate";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [carts] = useCartDate();
  console.log(carts);

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const navOptions = (
    <>
      <li className="btn btn-ghost p-0">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="btn btn-ghost p-0">
        <NavLink to={"/contactUs"}>Contact Us</NavLink>
      </li>
      <li className="btn btn-ghost p-0">
        <NavLink to={"/dashboard/userHome"}>DASHBOARD</NavLink>
      </li>
      <li className="btn btn-ghost p-0">
        <NavLink to={"/ourMenu"}>Our Menu</NavLink>
      </li>
      <li className="btn btn-ghost p-0">
        <NavLink to={"/secret"}>Secret</NavLink>
      </li>
      <li className="btn btn-ghost p-0">
        <NavLink to={"/ourShop/salads"}>Our Shop</NavLink>
      </li>
      <li className="btn btn-ghost p-0">
        <NavLink to={"/dashboard/cart"}>
          <FaCartPlus className="text-2xl text-green-700 " />
          <sub className="badge badge-secondary -ml-3 text-sm mt-4 bg-red-700  ">
            +{carts.length}
          </sub>
        </NavLink>
      </li>
      {user ? (
        <>
          <li onClick={handleLogout} className="btn btn-ghost p-0">
            <> Logout</>
          </li>
        </>
      ) : (
        <li className="btn btn-ghost p-0">
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      )}

      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <NavLink to={''}>Submenu 1</NavLink >
            </li>
            <li>
              <NavLink to={''}>Submenu 2</NavLink >
            </li>
          </ul>
        </details>
      </li> */}
    </>
  );

  return (
    <div className="navbar fixed z-30 bg-opacity-30 text-white font-bold bg-black max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-400 rounded-box w-52 uppercase "
          >
            {navOptions}
          </ul>
        </div>
        <div className="btn  btn-ghost text-2xl">
          <Link to={"/"} className=" flex flex-col uppercase ">
            <p className="font-extrabold">Bistro Boos </p>
            <p
              style={{ letterSpacing: "9px" }}
              className="text-xs text-center font-bold ml-1"
            >
              Restaurant
            </p>
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 uppercase flex items-center gap-0">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src={user ? user.photoURL : ""} />
          </div>
        </div>
        <p>{user?.displayName}</p>
      </div>
    </div>
  );
};

export default Navbar;

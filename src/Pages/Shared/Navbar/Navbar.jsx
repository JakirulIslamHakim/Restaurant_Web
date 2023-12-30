import { Link, NavLink } from "react-router-dom";
import './navStyle.css'

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/contactUs'}>Contact Us</NavLink>
      </li>
      <li>
        <NavLink to={'/dashboard'}>DASHBOARD</NavLink>
      </li>
      <li>
        <NavLink to={'/ourMenu'}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={'/ourShop/salads'}>Our Shop</NavLink>
      </li>
      
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-400 rounded-box w-52 uppercase bg-blac"
          >
            {navOptions}
          </ul>
        </div>
        <div className="btn  btn-ghost text-xl">
          <Link to={"/"} className=" flex flex-col uppercase">
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
        <ul className="menu menu-horizontal px-1 uppercase">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;

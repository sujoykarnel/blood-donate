import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import { IoMdLogIn, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const user = null;

  const handleLogOut = () => {
    console.log("clicked");
  };

  const navOptions = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>

      <li>
        <Link>Doner List</Link>
      </li>

      <li>
        <Link>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-red-100/70 shadow-sm sticky z-10 top-0 max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMdMenu className="text-2xl" />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-red-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <Link to={"/"} className=" text-xl text-gray-800 flex items-center">
          <img width={50} src={logo} alt="" />
          <div>
            <p className="font-bold text-red-600">Blood Donate</p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex justify-center items-center gap-4">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <details>
                    <summary>Admin Pannel</summary>
                    <ul className="p-2">
                      <li>
                        <Link to={"/admin"} className="text-nowrap">
                          Dashboard
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li onClick={handleLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/signIn"}>
              <button
                className="btn btn-circle btn-ghost tooltip tooltip-bottom"
                data-tip="Sign In"
              >
                <IoMdLogIn className="text-2xl" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

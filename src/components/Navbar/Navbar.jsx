import { Link, NavLink } from "react-router";
import { FaPaw } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import MyLink from "./MyLink";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOutFunc } = useContext(AuthContext);

  const handleLogout = () => {
    logOutFunc()
      .then(() => {
        toast.success("LogOut successfully!");
      })
      .catch((err) => console.log(err));
  };

  const links = (
    <>
      <MyLink to={"/"}>Home</MyLink>

      <MyLink to={"/pet-supplies"}>Pets & Supplies</MyLink>

      {user && (
        <>
          <MyLink to={"add-list"}>Add Listing</MyLink>

          <MyLink to={"/my-list"}>My Listings</MyLink>

          <MyLink to={"/my-orders"}>My Orders</MyLink>
        </>
      )}
    </>
  );

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="navbar container mx-auto flex justify-between items-center py-3 px-4">
        {/* Mobile Left - Menu Icon */}
        <div className="md:hidden flex-1">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-white rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>

        {/* Center - Logo */}
        <div className="flex-1 flex justify-center md:justify-start">
          <Link to="/" className="flex items-center gap-2">
            <FaPaw className="text-2xl text-orange-500" />
            <span className="font-bold text-xl text-gray-800">PawMart</span>
          </Link>
        </div>

        {/* Right - User / Auth buttons */}
        <div className="flex-1 flex justify-end items-center">
          {user ? (
            <div className="relative">
              {/* User Avatar */}
              <button
                popoverTarget="popover-1"
                style={{ anchorName: "--anchor-1" }}
                className="focus:outline-none"
              >
                <img
                  src={
                    user?.photoURL ||
                    "https://i.pinimg.com/736x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"
                  }
                  className="h-10 w-10 rounded-full border-2 border-orange-400 shadow-md hover:scale-105 transition-transform duration-200"
                  alt="User avatar"
                />
              </button>

              {/* Dropdown */}
              <div
                id="popover-1"
                popover="auto"
                style={{ positionAnchor: "--anchor-1" }}
                className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-lg p-4 text-gray-700 z-50"
              >
                <div className="text-center mb-3">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {user?.displayName || "User"}
                  </h2>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </div>

                <hr className="my-2 border-gray-300" />

                <div className="flex flex-col gap-2">
                  <Link
                    to="/profile"
                    className="flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium bg-gray-100 hover:bg-orange-100 hover:text-orange-600 transition"
                  >
                    <CgProfile className="text-lg" />
                    Profile Update
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 transition"
                  >
                    <IoLogOutOutline className="text-lg" />
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Desktop Nav links */}
        <div className="hidden md:flex gap-4 absolute left-1/2 -translate-x-1/2">
          {links}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

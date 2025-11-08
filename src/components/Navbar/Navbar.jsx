import { Link, NavLink } from "react-router";
import { FaPaw } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import MyLink from "./MyLink";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged out");
      })
      .catch((err) => console.log(err));
  };

  const links = (
    <>
      <MyLink to={"/"}>Home</MyLink>

      <MyLink to={"/pet-supplies"}>Pets & Supplies</MyLink>

      {user && (
        <>
          <MyLink>Add Listing</MyLink>

          <MyLink>My Listings</MyLink>

          <MyLink>My Listings</MyLink>
        </>
      )}
    </>
  );

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="navbar container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <FaPaw className="text-2xl text-orange-500" />
          <span className="font-bold text-xl text-gray-800">PawMart</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex gap-4">{links}</div>

        {/* Right side (Login/Profile) */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              {/* Profile Avatar */}
              <div className="relative group">
                <img
                  src={user.photoURL || "https://i.ibb.co/4fFvYhp/user.png"}
                  alt="profile"
                  className="w-10 h-10 rounded-full border-2 border-orange-400 cursor-pointer"
                />
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-2 right-0 mt-2 w-40 text-sm">
                  <p className="font-semibold mb-1 text-gray-800">
                    {user.displayName || "User"}
                  </p>
                  <p className="text-gray-500 text-xs mb-2">
                    {user.email || ""}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-500 hover:text-red-600"
                  >
                    <IoLogOutOutline /> Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-md border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-md bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden dropdown dropdown-end">
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
    </div>
  );
};

export default Navbar;

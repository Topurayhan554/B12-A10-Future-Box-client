import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `text-white bg-orange-500 px-3 py-1 rounded-md ${className}`
          : `text-gray-700 px-3 py-1 rounded-md hover:bg-orange-100 hover:text-orange-500 transition-all duration-200 ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;

import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-orange-500" : `${className} text-gray-700`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;

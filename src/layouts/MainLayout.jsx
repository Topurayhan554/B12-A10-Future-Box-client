import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
      <Navbar />
      <div className="mt-5 flex-1">
        <Outlet />
      </div>
      <Footer />

      <ToastContainer />
    </div>
  );
};

export default MainLayout;

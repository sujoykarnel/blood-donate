import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mt-0 mx-auto">
      <Navbar></Navbar>
      <div className="p-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;

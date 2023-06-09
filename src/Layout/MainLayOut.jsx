import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";
import Footer from "../Pages/Shared/Footer";

const MainLayOut = () => {
  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;

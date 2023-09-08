import { Outlet, } from "react-router-dom";
import NavBar from "../components/NavBar";
import React from "react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
};

export default Layout;
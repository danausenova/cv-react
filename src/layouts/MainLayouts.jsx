import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import HeaderBottom from "../components/HeaderBottom";

const MainLayouts = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <HeaderBottom />
    </div>
  );
};

export default MainLayouts;

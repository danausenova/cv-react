import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import MainPage from "../pages/MainPage";
import AboutMePage from "../pages/AboutMePage";
import AboutHobby from "../pages/AboutHobby";
import AboutWorkPage from "../pages/AboutWorkPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/me" element={<AboutMePage />} />
        <Route path="/work" element={<AboutWorkPage />} />
        <Route path="/hobbies" element={<AboutHobby />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Aboutus from "../pages/Aboutus";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>

      </Routes>
    </div>
  );
};

export default Allroutes;

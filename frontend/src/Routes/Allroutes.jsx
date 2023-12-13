import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;

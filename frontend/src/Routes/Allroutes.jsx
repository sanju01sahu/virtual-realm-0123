import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Aboutus from "../pages/Aboutus";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import SingleProduct from "../pages/SingleProduct";
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/singleproduct" element={<SingleProduct />}></Route>
      </Routes>
    </div>
  );
};

export default Allroutes;

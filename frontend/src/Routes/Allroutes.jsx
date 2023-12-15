import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Aboutus from "../pages/Aboutus";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import SingleProduct from "../pages/SingleProduct";
import CartPage from "../pages/CartPage";
// import Adminpage from "../admin/Pages/Adminpage";

import Checkout from "../pages/Checkout";
import Dashboard from "../Admin/Pages/Dashboard";
import AdminNavbar from "../Admin/Components/AdminNavbar";


const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/singleproduct" element={<SingleProduct />}></Route>

        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>


      </Routes>
    </div>
  );
};

export default Allroutes;

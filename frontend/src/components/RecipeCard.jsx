import React from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../constants";
import axios from "axios";

const newUrl = `${URL}/orders`;

const orderData = {
    userID:"",
    orders:[],

}

const RecipeCard = ({ title, image, category, serving, _id }) => {
  const isAuth = false;
  const navigate = useNavigate();


  const handleNavigate = ()=>{
    useNavigate(`/singleproduct/${_id}`);
  }

  const handleCart = ()=>{
    axios
  }


  return (
    <div  className="recipe-card" >
      <div className="recipe-image" >
        <img src={image[0]} alt="" />
      </div>
      <div className="recipe-body" >
        <h3 className="recipe-title" >{title}</h3>
        <p className="recipe-category">{category}</p>
        <p className="recipe-serving" >{serving}</p>
        {isAuth ? <button onClick={handleCart} >Add To Cart</button> : ""}
        <button onClick={handleNavigate} >View</button>
      </div>
    </div>
  );
};

export default RecipeCard;

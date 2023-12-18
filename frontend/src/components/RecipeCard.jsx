import React from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../constants";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

const newUrl = `${URL}/orders`;

const orderData = {
  userID: "",
  orders: [],
};
// const orders = {

// }

const RecipeCard = ({ title, image, category, serving, _id }) => {
  const navigate = useNavigate();
  const { isAuth, userData } = useSelector((store) => store.userReducer);

  const handleNavigate = () => {
    navigate(`/singleproduct/${_id}`);
  };

  const handleCart = () => {
    axios.post(`${newUrl}/add`);
  };

  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={image[0]} alt="" />
      </div>
      <div className="recipe-body">
        <h3 className="recipe-title">{title}</h3>
        <p className="recipe-category">{category}</p>
        <p className="recipe-serving">{serving}</p>
        {isAuth ? (
          <Button bg={"#87CBB9"} m={"10px"} onClick={handleCart}>
            Add To Cart
          </Button>
        ) : (
          ""
        )}
        <Button bg={"#87CBB9"} onClick={handleNavigate}>
          View
        </Button>
      </div>
    </div>
  );
};

export default RecipeCard;

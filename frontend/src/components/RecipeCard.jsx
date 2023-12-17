import React from "react";

const RecipeCard = ({ title, image, category, serving }) => {
  const isAuth = false;

  return (
    <div className="recipe-card" >
      <div className="recipe-image" >
        <img src={image[0]} alt="" />
      </div>
      <div className="recipe-body" >
        <h3 className="recipe-title" >{title}</h3>
        <p className="recipe-category">{category}</p>
        <p className="recipe-serving" >{serving}</p>
        {isAuth ? <button  >Add To Cart</button> : ""}
      </div>
    </div>
  );
};

export default RecipeCard;

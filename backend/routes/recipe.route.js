const express = require("express");
const { RecipeModel } = require("../models/recipe.model");
const recipeRouter = express.Router();

// recipeRouter.use(limiter);

recipeRouter.get("/", async (req, res) => {
  try {
    let query = req.query;
    console.log(query);
    let allPosts = await RecipeModel.find(query);
    console.log(allPosts.length);
    res.status(200).send({ msg: "success", data: allPosts });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

recipeRouter.post("/newRecipe", async (req, res) => {
  try {
    let newRecipe = req.body;
    let saveRecipe = new RecipeModel(newRecipe);
    await saveRecipe.save();
    res.status(200).send({ msg: "Recipe added" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});


recipeRouter.patch("/updateRecipe/:id",async(req,res)=>{
   let {id}=req.params;
    
        let updateFields=req.body;
    try{   
        await RecipeModel.findByIdAndUpdate({ _id: id },updateFields);
        res.status(200).send({"msg":"recipe updated"});
    }catch(err){
        res.status(400).send({"error":err.message});
    }
})
 




recipeRouter.delete("/deleteRecipe/:id", async (req, res) => {
  try {
    let { id } = req.params;
    await RecipeModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ message: "post deleted" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});
module.exports = {
  recipeRouter,
};

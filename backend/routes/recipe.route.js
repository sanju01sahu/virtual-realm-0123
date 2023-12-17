const express = require("express");
const { RecipeModel } = require("../models/recipe.model");
const recipeRouter = express.Router();

// recipeRouter.use(limiter);

recipeRouter.get("/", async (req, res) => {

    const {userID} = req.body;
    if(userID){
        delete req.body.userID;
    }
    try {
        let query = req.query;
        let filter = {};

        // Filter by category
        if (query.category && query.category.length > 0) {
            filter.category = { $in: query.category };
        }

        // Search by name
        if (query.search) {
            filter.name = { $regex: new RegExp(query.search, 'i') };
        }

        let sort = {};

        // Sort by price
        if (query.sort === 'asc') {
            sort.price = 1;
        } else if (query.sort === 'desc') {
            sort.price = -1;
        }

        // console.log("Filter:", filter);
        // console.log("Sort:", sort);

        let allPosts = await RecipeModel.find(filter).sort(sort);
        // console.log(allPosts.length);

        res.status(200).send({ "msg": "success", "data": allPosts });
    } catch (err) {
        res.status(400).send({ "error": err.message });
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
    try{
        let {id}=req.params;
    
        let updateFields=req.body;
       
        await RecipeModel.findByIdAndUpdate({ _id: id },updateFields);
        res.status(200).send({"msg":"recipe updated"});
    }catch(err){
        res.status(400).send({"error":err.message});
    }
})


    await RecipeModel.findOneAndUpdate({ _id: id }, updateFields);
    let updatedRecipe = await RecipeModel.find({ _id: id });
    res.status(200).send({ msg: "recipe updated", data: updatedRecipe });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

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

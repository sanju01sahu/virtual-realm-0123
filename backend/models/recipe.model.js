const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  image:[String],
  title: String,
  ingredients:[String],
  category:String,
  serving: Number,
  instructions: String,
  
});

const RecipeModel = mongoose.model("recipe", recipeSchema);

module.exports = {RecipeModel };
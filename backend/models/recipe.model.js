const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  image:[String],
  title: String,
  ingredient_number: Number,
  ingredient_list:[String],
  category:[String],
  serving: Number,
  instructions: String,
  
});

const RecipeModel = mongoose.model("recipe", recipeSchema);

module.exports = { UserRecipeModelModel };
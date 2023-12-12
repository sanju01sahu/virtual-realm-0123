const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  title: String,
  
  
});

const RecipeModel = mongoose.model("recipe", recipeSchema);

module.exports = { UserRecipeModelModel };

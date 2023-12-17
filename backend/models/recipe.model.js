const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  image: { type: [String], required: true },
  price: { type: String, required: true },
  title: { type: String, required: true },
  ingredients: { type: [String], required: true },
  category: { type: String, required: true },
  serving: { type: String, required: true },
  instructions: { type: String, required: true },
});

const RecipeModel = mongoose.model("recipe", recipeSchema);

module.exports = { RecipeModel };

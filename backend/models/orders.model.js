const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userId: { type: String, required: true },
  orders: [
    {
      recipeId: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

const OrderModel = mongoose.model("order", orderSchema);

module.exports = {
  OrderModel,
};

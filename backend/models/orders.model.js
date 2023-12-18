const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userId: { type: String, required: true },
  orders: [
    {
      recipeId: { type: String},
      quantity: { type: Number},
    },
  ],
});

const OrderModel = mongoose.model("order", orderSchema);

module.exports = {
  OrderModel,
};

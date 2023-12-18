const express = require("express");
const orderRouter = express.Router();
const { OrderModel } = require("../models/orders.model");
const { auth } = require("../middlewares/auth.middleware");

orderRouter.use(auth);

orderRouter.get("/", async (req, res) => {
  const { userID } = res.body;
  try {
    const order = await OrderModel.find({ userID });
    res.status(200).send("gets all orders page");
  } catch (err) {
    res.send({ msg: "get orders failed" });
  }
});

orderRouter.post("/add", async (req, res) => {
  try {
    const newOrder = new OrderModel({ ...req.body });
    await newOrder.save();
    res.status(200).send("adds a new order to database");
  } catch (err) {
    res.send({ msg: "post orders failed" });
  }
});

orderRouter.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let orderReq = await OrderModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send("to update the order count on db");
  } catch (err) {
    res.send({ msg: "patch orders failed" });
  }
});

orderRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let deleteReq = await OrderModel.findByIdAndDelete({ _id: id });
    res.status(200).send("deletes the order from orders");
  } catch (err) {
    res.send({ msg: "delete orders failed" });
  }
});

module.exports = {
  orderRouter,
};

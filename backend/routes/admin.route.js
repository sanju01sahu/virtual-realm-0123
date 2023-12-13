const express = require("express");
const { AdminModel } = require("../models/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminRouter = express.Router();

adminRouter.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await AdminModel.find({ email });
    if (existingUser.length) {
      return res.statusCode(400).send({ msg: "user already exist" });
    }
    const newPass = bcrypt.hashSync(password, 8);
    const newUser = new AdminModel({ ...req.body, password: newPass });
    await newUser.save();

    return res.status(200).send({ msg: "new user resgitered" });
  } catch (error) {
    return res.statusCode(400).send({ msg: "registration failed", err: error });
  }
});

adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email,password)
  try {
    const loginAdmin = await AdminModel.findOne({ email }) ||null ;
    
    if (loginAdmin) {
      bcrypt.compare(password, loginUser.password, (err, result) => {
        // console.log("line32", result,err)
        if (result) {
          const token = jwt.sign({ useID: loginUser["_id"] }, "masai", {
            expiresIn: 3600000,
          });

          return res.status(200).send({ msg: "login sucessful", token });
        } else {
          res.status(200).send({ msg: "login failed" });
        }
      });
    }
  } catch (error) {
    res.status(400).send({ error: error });
  }
//   console.log("line46")
});

module.exports = { adminRouter };

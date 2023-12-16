const express = require("express");
const { UserModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BlacklistModel } = require("../models/blacklist.model");

const userRouter = express.Router();


userRouter.get("/",async(req,res)=>{
  try {
    const user = await UserModel.find();
    res.status(200).send(user)
    
  } catch (error) {
    return res.status(400).send(error.message);
    
  }
})

userRouter.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await UserModel.find({ email });
    if (existingUser.length) {
      return res.status(400).send({ msg: "user already exist" });

      return res.status(200).send({ "msg": "user already exists , Please login" });

    }

    const newPass = bcrypt.hashSync(password, 8);
    console.log(newPass);
    console.log(req.body);
    const newUser = new UserModel({ ...req.body, password: newPass });
    await newUser.save();
    return res.status(200).send({ "msg": "new user resgitered" });
  } catch (error) {
    return res.status(400).send({ msg: "registration failed", err: error });

  }
});



userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email,password)
  try {
    const loginUser = await UserModel.findOne({ email }) ||null ;
    
    if (loginUser) {
      bcrypt.compare(password, loginUser.password, (err, result) => {
        // console.log("line32", result,err)
        if (result) {
          const token = jwt.sign({ useID: loginUser["_id"] ,role:loginUser.role}, "masai", {
            expiresIn: 3600000,
          });
                 res.cookie("token",token);
          return res.status(200).send({ msg: "login sucessful", token });
        } else {
          res.status(200).send({ msg: "login failed" });
        }
      });
    }else{
      res.status(200).send({"msg":"User Not Found, Please Register"})
    }
  } catch (error) {
    res.status(400).send({ error: error });
  }

});

userRouter.delete("/delete/:id",async(req,res)=>{

  const {id} = req.params;
  try {
    await UserModel.findByIdAndDelete({_id:id})
    res.status(200).send({message:"User has been deleted"})
  } catch (error) {
    res.status(400).send({ error: error });
    
  }
})


userRouter.post("/logout",async(req,res)=>{
    try{
         let token=req.cookies.token;
         let doLogout=new BlacklistModel({token:token});
         await doLogout.save();
         res.cookie("token","");
         return res.status(200).send({ msg: "You are logged out"});
    }catch(err){
         res.status(400).send({ error: err.message });
    }
})

module.exports = { userRouter };

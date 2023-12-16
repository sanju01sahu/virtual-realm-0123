const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {type:String,required:true},
  email:  {type:String,required:true},
  gender: {type:String,required:true},
  password:  {type:String,required:true},
  mobile: {type:Number,required:true},
  avatar: {type:String,required:false},
  role:{type:String,enum:["user","admin"] ,default:"user"}
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };

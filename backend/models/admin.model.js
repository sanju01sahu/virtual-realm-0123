const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  password: String,
  mobile:Number,
  avatar:String,
  
});

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = { AdminModel };

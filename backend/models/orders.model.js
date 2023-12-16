
const mongoose=require("mongoose");

const orderSchema=mongoose.Schema({
    recipeId:{type:String,required:true},
     userId:{type:String,required:true},

})

const OrderModel=mongoose.model("order",orderSchema);

module.exports={
    OrderModel
}
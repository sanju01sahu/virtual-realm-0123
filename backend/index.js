const express= require("express");
const cors  = require("cors");
require("dotenv").config();
const {connection} = require("./db");
const { userRouter } = require("./routes/user.route");
const  {recipeRouter}=require("./routes/recipe.route");
const {orderRouter}=require("./routes/order.route");
const PORT = process.env.PORT || 8080;

const app =express();

app.use(express.json());
app.use(cors());


app.use("/users", userRouter);
app.use("/recipe",recipeRouter);
app.use("/orders",orderRouter);

app.get("/", (req,res)=>{
    res.send("HomePage")
})



app.listen(PORT, async ()=>{
    try {
        await connection;
        console.log("db connect sucessful");
         console.log(`server running @ port ${PORT}`)
    } catch (error) {
        console.log("error:". error);
    }
   
})
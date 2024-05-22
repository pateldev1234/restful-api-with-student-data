const express= require("express");
require("./connection.js")

const app=express();
const port=process.env.PORT || 8000;
const router=require("./routing.js")
app.use(express.json())
app.use(router);

app.listen(port,()=>{
    console.log("all good ");
})
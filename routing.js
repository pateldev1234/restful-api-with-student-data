const express= require("express");
const router= express.Router();

const studentdata=require("./schema.js")

router.post("/user", async(req,res)=>{
    try{
        const data= new studentdata(req.body);
        const insert= await data.save();
        res.send(insert);
    }
    catch(err){
        res.send(err);
    }

})

router.get("/user",async(req,res)=>{
    try{
        const data= await studentdata.find();
        res.send(data);
    }
    catch(err){
        res.send(err);
    }

})

router.put("/user/:admission/:course",async(req,res)=>{
    try{

        const admission=req.params.admission;
        const course=req.params.course;

        const data= await studentdata.updateOne({"admission":admission},{$set:{"course":course}});
        res.send(data);
    }
    catch(err){
        res.send(err);
    }

})

router.delete("/user/:admission",async(req,res)=>{
    try{

        const admission=req.params.admission;
        const data= await studentdata.deleteOne({"admission":admission});
        res.send("deleted successfully");
    }
    catch(err){
        res.send(err);
    }

})

module.exports=router;

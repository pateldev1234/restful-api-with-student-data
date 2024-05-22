const mongoose=require("mongoose");
const student_schema = new mongoose.Schema({
    admission:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        min:10
    },
    course:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    hostel:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    }
})

const s_schema=new mongoose.model("studentdata",student_schema)
module.exports=s_schema;

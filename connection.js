const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/studentinformation")
.then(()=>{
    console.log("connection is builded successful");
}).catch((err)=>{
     console.log("error :",err.message);
})
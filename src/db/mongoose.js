const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/form",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection established successfully");
}).catch(()=>{
    console.log("Unable to connect");
});
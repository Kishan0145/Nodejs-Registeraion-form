const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
    name:{
        type:String,
        trim:true,
        required:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid Email");
            }
        }
    }
})

module.exports = User;
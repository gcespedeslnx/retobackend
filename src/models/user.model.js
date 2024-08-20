const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
    type: String,
    required:false,
    minlength:2,
    maxlength:50,
    },
    profilePic:{
        type: String,
        required: false,
        
    },
    email:{
        type: String,
        required: true,
        match:RegExp("/.@.\..*/"),

    },
    password:{
        type: String,
        required: true,
    
    },
    createAt:{
        type: Date,
        default: Date(),
    },
    updateAt:{
        type: Date,
        default: Date(),
    },
});

module.exports = mongoose.model("user",userSchema);




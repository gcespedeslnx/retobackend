const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
    type: String,
    required:true,
    minlength:2,
    maxlength:50,
    },
    profilePic:{
        type: String,
        required: true,
        width: 50,
        height:50,
    },
    email:{
        type: String,
        required: true,
        match:RegExp(".*@.*..*"),

    },
    password:{
        type: String,
        required: true,
        select:true,
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




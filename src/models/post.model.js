const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minLength: 2,
        maxlength:20,
    },
    images:{
        type:String,
        required:true,
     },
    body:{
        type:String,
        required:true,
        minLength: 2,
        maxlength:200,
    },
    user:{
        type: String,
    },
    created_at:{
        type:Date,
        default:new Date()},
    updated_at:{
        type:Date,
        default:new Date(),
    },
    
});

module.exports = mongoose.model("post",postSchema);
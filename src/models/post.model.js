const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true,
        minlength:20,
        maxlength:100, 
    },

    image:{
        type: String,
        required:true,
        width: 50,
        height:50,
   },
    body:{
        type: String,
        required:true,
        minlength:20,
        maxlength:100,
    }
//user:{
  //      type:mongoose.Schema.Types.ObjectId,
    //    required:false,
      //  ref:"user",

    //}

});

module.exports = mongoose.model("post", postSchema);
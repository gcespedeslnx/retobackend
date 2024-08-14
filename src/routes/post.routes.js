const express = require("express");
//const createError = require("http-errors");

const postUsesCases = require("../usescases/post.usescases");

const router = express.Router();

router.get("/",async(request, response)=>{
    try {
        const post = await postUsesCases.getAllPost();
        response.json({
            success: true,
            message: "All post",
            data: {post}

        });
    } catch (error) {
        
        response.status(error.status || 500);
          response.json({
            success: false,
            message:error.message,
          });
    }
    
});


router.get("/:id", async(request, response)=>{
    try {
        const id = request.params.id;
        const post = await postUsesCases.getByIdPost(id);

        if(!post){
            throw createError(404,"Post not found");
        }
        response.json({
            success:true,
            message:"Post by id",
        });
    
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success:false,
            message:error.message,
        });    
    }
});


router.post("/", async (request, response)=>{
    try {
    
        const newPost = await postUsesCases.create(data);
         
        response.json({
            success: true,
            message: "Post created",
            data: {newPost},
        });

    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            message:error.message,
        });
      
    }
});

router.patch("/:id", async (request, response)=>{
    try {
        const id = request.params.id;
        postData = request.body;
        const postFound = await post.getByIdPost(id);
        if (postFound){
            throw createError(404,"Post not found");
        }
        const post = await postUsesCases.updateByIdPost(id, postNew);
        
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success: false,
            message: error.message,
        });
    }
});


module.exports = router;
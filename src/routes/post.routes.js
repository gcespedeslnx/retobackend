const express = require("express");
const createError = require("http-errors");

const postUsesCases = require("../usescases/post.usescases");

const router = express.Router();

router.get("/", async (request, response)=>{
    try {
        const post = await postUsesCases.getAll();
        
        response.json({
            success: true,
            message: "All posts",
            data: {post},
        });
        
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success:false,
            message: error.message,
        });
        
    }
});
router.get("/:id", async (request, response)=>{
    try {
        const id = request.params.id;       
        const post = await postUsesCases.getById(id);
         
        if (!post){
            throw createError(404, "Post not found");
        }

        response.json({
            success: true,
            message: "Post by id",
            data: {post}
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success:false,
            message: error.message,
        });     
    }
});

router.post("/", async (request, response)=>{
  try {
    const data = request.body;
    const id = request.params.id;
    const findID = await postUsesCases.getById(id);
    
    const post = await postUsesCases.create(data);

    response.json({
        success: true,
        message: "Post created",
        data:{post},
    });
    
  } catch (error) {
    response.status(error.status || 500);
    response.json({
        success:false,
        message: error.message,
    });    
  }
});

router.patch("/:id", (request , response)=>{
    try {
        const id = request.params.id;
        const data = request.body;
        
        const post = postUsesCases.updateById(id, data);
        
        response.json({
            success: true,
            message: "Post updated",
            data: {data},
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success:false,
            message: error.message,
        });
        
    }
});

router.delete("/:id",async(request, response)=>{
    try {
        const id = request.params.id;

        const post = await postUsesCases.deleteById(id);

        response.json({
            success: true,
            message: "Post deleted",
            data: {post},
        });

    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success:false,
            message: error.message,
        });        
    }
});

module.exports = router;
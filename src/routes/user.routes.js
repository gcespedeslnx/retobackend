const express = require("express");
const createError = require("http-errors");
const userUsesCases = require("../usescases/user.usescases");


const router = express.Router();

router.get("/", async (request, response)=>{
    try {
        const user = await userUsesCases.getAll();
        
        response.json({
            success: true,
            message: "All users",
            data: {user},
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
      const id = request.params.id
        
       if (id){
          throw  createError(404, "User Already exist");
        }
      
      const user = await userUsesCases.create(data);
        
      response.json({
          success: true,
          message: "User created",
          data:{user},
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
        const user = await userUsesCases.getById(id);
         
        if (!user){
            throw createError(404, "User not found");
        }

        response.json({
            success: true,
            message: "User by id",
            data: {user}
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
        
        const post = userUsesCases.updateUser(id, data);
        
        response.json({
            success: true,
            message: "User updated",
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

        const user = await userUsesCases.deleteUser(id);

        response.json({
            success: true,
            message: "User deleted",
            data: {user},
        });

    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success:false,
            message: error.message,
        });        
    }
});

router.post("/signup", async (request, response)=>{
    try {
        const data = request.body;
        const user = await userUsesCases.signUp(data);

        response.json({
            success: true,
            message:"Created User",
            data:{user},
        });
    } catch (error) {
        response.status(error.status || 500);
        response.json({
            success:false,
            message:error.message,
    })
        
    }
})

module.exports = router;
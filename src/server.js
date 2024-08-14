const express = require('express');
const postRoutes = require ("./routes/post.routes")

const app = express();

app.use(express.json());

app.use("/post",postRoutes);

app.get("/",(request, response)=>{
    response.json({
        success:true,
        message:"Server is running"

    });
});


module.exports = app;
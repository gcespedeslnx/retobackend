const express = require('express');
const cors = require("cors");
const helmet = require("helmet")
const postRoutes = require ("./routes/post.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use("/post",postRoutes);
app.use("/user",userRoutes);

app.get("/",(request, response)=>{
    response.json({
        success:true,
        message:"Server is running"

    });
});


module.exports = app;
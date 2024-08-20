require("dotenv").config();
const server = require("./src/server");
const db = require("./src/lib/db");
port = 8080;


db.connect().then(()=>{
    console.log("Database connected");
    server.listen(port, ()=>{
        console.log(`Server is running on port ${port}`);
    })
    
})
const mongoose = require("mongoose")


const DB_USER= "gcespedeslnx";
const  DB_PASSWORD ="xTfYlucUVCU2hitv";
const DB_HOST = "gcespedes.qz5ad.mongodb.net";
const DB_NAME = "kodemia";
const url =`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

function connect() {
    return mongoose.connect(url);
    
}

module.exports = {connect};
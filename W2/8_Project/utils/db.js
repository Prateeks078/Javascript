import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config()  // to load the .env file

const db=()=>{
    mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            console.log("Connected to MongoDB")
        })
        .catch((err)=>{
            console.log("Error Connecting to MongoDB");
        })
}

export default db;
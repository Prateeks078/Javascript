
// import mongoose from "mongoose";
// const userSchema=new mongoose.Schema(); 
// const Users=mongoose.model("Users", userSchema);
// export default Users;

// These Lines will remain defualt in every case ok 

import mongoose from "mongoose"; 

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{
        type:String,
        enum:["user", "admin"],  // to specify the allowed values for the role field
        default:"user" // to specify the default value for the role field
    },
    isVerified:{
        type: Boolean,
        default:false
    },
    verificationToken:{
        type:String
    },
    resetpasswordToken:{
        type:String
    },
    resetpasswordExpiry:{
        type:Date
    }
},{
    timestamps:true  // to automatically add createdAt and updatedAt fields to the schema, i can create my own as well
});  
// It is a constructor function that creates a new schema object.

const Users=mongoose.model("Users", userSchema); 
// It is a method that creates a new model based on the schema and the collection name. 
// The first argument is the name of the collection in the database and the second argument is the schema object.

export default Users;
// It is a method that exports the model so that it can be used in other files.


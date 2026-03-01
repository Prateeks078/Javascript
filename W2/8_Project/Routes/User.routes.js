import express from "express"
import { registerUser } from "../Controller/User.controller.js";
import { verifyUser } from "../Controller/User.controller.js";
import {login} from "../Controller/User.controller.js";

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Hi, we are on root, without controller likha hai maine")
});

router.post("/register",registerUser); //Maine sirf itna likha, upper se apne aap it got imported in 
router.get("/verify/:token",verifyUser);// chai likhega to chai milego, token likhega toh token milega 
router.post("/login", login); // login ke liye bhi ek controller bana denge, usme email password lenge, check karenge ki user exist karta hai ya nahi, password match karta hai ya nahi, aur fir token generate karke bhej denge user ko, taki wo apne account me login kar sake

export default router;
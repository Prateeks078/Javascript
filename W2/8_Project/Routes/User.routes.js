import express from "express"
import { registerUser } from "../Controller/User.controller.js";

const router=express.Router();

router.get("/",(req,res)=>{
    res.send("Hi, we are on root, without controller likha hai maine")
});


router.get("/register",registerUser); //Maine sirf itna likha, upper se apne aap it got imported in 

export default router;
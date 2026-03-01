import User from "../Model/User.model.js";
import crypto from "crypto"
import nodemailer from "nodemailer"
import Users from "../Model/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const registerUser = async (req, res) => {
    // res.send("User registered Successfully");

    // get data
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All Fields are mandatory and required !!"
        })
    }

    // validate data
    // check if user already exists in the database 
    // create a user in the database
    // create a verification token
    // save the token in the database
    // send token as email to user 
    // send success status to user 


    // console.log(email);

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists."
            })
        }

        const user = await User.create({
            name,
            email,
            password
        })
        console.log(user); // to check if the user is created or not in the database, 
        // it will print the user object in the console 

        if (!user) {
            return res.status(400).json({
                message: "User Not Registered !!"
            })
        }


        // Creating verification token in the project
        const token = crypto.randomBytes(32).toString("hex");
        console.log(token);

        user.verificationToken = token;
        await user.save();

        // Sending Emails with the help of a service 

        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // Use true for port 465, false for port 587
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD,
            },
        });

        const mailoption = {
            from: process.env.MAILTRAP_SENDER_EMAIL,
            to: user.email, //user is the object which we got after creating the user in the database, it has the email field which we can use to send the email to the user
            subject: "Verify ur Email",
            text: `Please, Click on the following Link ${process.env.BASE_URL}/api/v1/users/verify-email/${token}`,

        }

        await transporter.sendMail(mailoption);

        res.status(201).json({
            message: "User registered Successfully !!",
            success: true
        })

    } catch (error) {
        res.status(400).json({
            message: "User registered Successfully !!",
            error,
            success: false
        })
    }

}

// -------------------------------------------------------

const verifyUser = async (req, res) => {

    // Algorithm 
    // -- Get token from the URL 
    // -- Validate it 
    // -- find user based on the token 
    // -- ifnot 
    // -- isverified ko false se true
    // -- remove verification token
    // -- save and return the response

    const { token } = req.params;

    if (!token) {
        res.status(400).json({
            message: "Invalid Token"
        })
    }

    const user = await Users.findOne({ verificationToken: token })

    if (!user) {
        res.status(400).json({
            message: "Invalid Token"
        })
    }

    user.isVerified = true;
    user.verificationToken = undefined;

    await user.save();
}

// -------------------------------------------------------

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({
            message: "All fields are mandatorily required !!"
        })
    }

    try {
        const user = Users.findOne({ email: email });
        const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch);

        if (!isMatch) {
            res.status(400).json({
                message: "Invalid Email or Password !!!"
            })
        }


        const token = jwt.sign({
            id: user._id,
            role: user.role
        }, "prateeksecretkey",
            {
                expiresIn: "24h"
            })

        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        }

        res.cookie(token, "token", cookieOptions);

        res.status(200).json({
            success: true,
            message: "User Logged in Successfully !!",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })

    } catch (error) {

    }

}

export { registerUser, verifyUser, login };
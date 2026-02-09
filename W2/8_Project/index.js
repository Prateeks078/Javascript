// If u want to import something then u need to write in package.json "type": "module"

import express from "express"  // tha nahi toh just imported 
import dotenv from "dotenv"
import db from "./utils/db.js" // to import the db function from the db.js file
import cors from "cors"  // CORS stands for Cross-Origin Resource Sharing. 

// Importing Routes
import userRoutes from "./Routes/User.routes.js"

// It is a mechanism that allows restricted resources on a web page to be requested from another domain
// outside the domain from which the resource originated.
// Always try to resolve cors error from Backend side only, never try to resolve it from frontend side 
// because it is a security feature of the browser and it is not recommended to disable it from frontend side.

dotenv.config()  // to load the .env file
// To verify it: console.log(process.env)
const app = express()
// const port = 3000
const port = process.env.PORT || 4000;

app.use(cors({
  origin: "http://localhost:3000",  // to allow requests from this origin only
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],  // to allow only these methods
  allowedHeaders: ["Content-Type", "Authorization"]  // to allow only these headers
}))  // to enable CORS for all routes:

// Why I fixed and Put Cors, what was the need of it 
// Because I want only my frontend to access the backend and not any other frontend, 
// so I will be allowing only my frontend to access the backend by using CORS and 
// I will be specifying the origin of my frontend in the CORS options.

app.use(express.json())  // to parse the JSON data from the request body
app.use(express.urlencoded({extended:true})) // to parse the URL-encoded data from the request body



// 1st route-- Route and Call-Back are there
app.get('/', (req, res) => {
  res.send('Chai Chahiye h chahiye !')
})


// 2nd route
app.get('/prateek', (req,res)=>{
res.send("Hi, this is prateek Sharma")
})


// Notes:

// I need to re start again and again which is making it difficult for me 
// Toh I will be installing nodemon which will automatically restart the server whenever I make changes in the code
// With the help of npm i -D nodemon
// Then u will get to know ki life m 2 types of dependencies hoti hai ek hoti hai dependencies and other is devDependencies
// Dependencies are the packages that are required for the application to run and devDependencies are the packages that are required for development purposes only

// Then I will be changing the script in package.json to "start": "nodemon index.js"
// Then I can start the server with npm start and it will automatically restart whenever I make changes in the code

// Connect to DB 
db();


app.use("/api/v1/users/",userRoutes); // to use the user routes, 
// now whenever I will hit this route then it will go to the user routes 
// and then it will go to the controller 
// and then it will execute the function and then it will send the response to the client


console.log(process.env.PORT);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

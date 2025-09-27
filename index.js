//  This project is not running with npm run dev so run with node index.js


// 4.

// 1. creating instance of express or you can say putting the functionality of express into express vaiable 
// just say It is a way of importing
const express = require('express');
// or write like this
// import {express} from "express"



// 2 // creating my application
const app = express();


//6.1
const connectDB = require('./db');

const users = require('./routes/users')

const dotenv = require('dotenv')


//load
dotenv.config();

const PORT = process.env.PORT;

//body parser // 6.3 just include body parser also .7 Then go to db.js and shift the URL in by creating .env file
app.use(express.json());

// 6.2
//connect to database
connectDB();




// last m lagana after creating route logic . 

// Loading my user route here 
app.use('/api', users);
/// -> /api/users



// 4 // yaha se run kr dena . 5.Then make db.js
app.get('/', (req,res) => {
    console.log("I am inside home page route handler");
    res.send("Hello Everyone");
})


// 3.
app.listen(PORT, ()=> {
    console.log("Server is Up")
})
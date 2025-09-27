const express = require('express')

// with the help of model I can perform crud operation in db
const User = require('../models/userModel');

// import UserModel from "../models/userModel"

const userRouter = express.Router();

// const userRouter = Router()

// const User = require('../models/userModel');


//routes

//CRUD Operations

//View/Read

userRouter.get('/users', async(req,res) => {

    try {
        // finding all the users from db and sending as response
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
})

//Create

userRouter.post('/users', async(req,res) => {
    console.log("Received request for POST method")
    try{
        const {name, age, weight} = req.body;
        const newUser = new User({name,age,weight});

        // to save new user in db
        await newUser.save();
        res.status(200).json({
            success:true,
            user: newUser
        })
    }
    catch(err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
    
})

//Update

userRouter.put('/users/:id', async(req,res) => {
    const {id} = req.params;
    const {name, age, weight} = req.body;

    try{
        const updatedUser = await User.findByIdAndUpdate(id, {name,age,weight});
      
        // user does not exist then because u may try to update user that does not exist
        if(!updatedUser) {
            res.json({
                message: "User Not found"
            })
        }
        //but if you have updated the user successfully.//vese toh ignore kra dena but know this updatedUser m poorana vala data aaiga
        res.status(200).json({
            success:true,
            user:updatedUser
        })
    }
    catch(err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }

})


//delete 
userRouter.delete('/users/:id', async(req,res) => {
    const {id} = req.params;

    try{
        const deletedUser  = await User.findByIdAndDelete(id);

        if(!deletedUser) {
            res.json({
                message: "User not found"
            })
        }
        //if user found and deleted successfully
        res.status(200).json({
            success:true,
            user: deletedUser
        })

    }catch(err) {
        res.status(500).json({
            success:false,
            message: err.message
        })
    }
})




// export default userRouter;

module.exports = userRouter;
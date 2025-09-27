//  9 kehna u can use the docx if you dont remember the syntax basically synxtax is important in this (own)

const {Schema,model} = require("mongoose");

const UserSchema = new Schema({
    name: {


      //  required: [true, "Name is required"], aisa bhi kr sakte h but dikahna mat
      type: String,

      // means it is not optional fiield . it will be mandatory to fill
      required: true,
      maxlength: 50
    },

    // min: [0, "Age cannot be negative"] // validation
    age:{
        type:Number,
        required:true
    },
    weight: {
        type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});


// Model create kiya after creating schema 



// UserModel becomes a JavaScript class you can use for CRUD operations:

// "User" → this is the model name.

// Mongoose will automatically create a collection name in your database by making it lowercase and plural.

// Example: "User" → users collection. IMP

// From here make routes for crud // 10. Go to routes.js

const UserModel = model("User", UserSchema)
  
module.exports = UserModel;

// export default UserModel

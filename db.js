// 5
const mongoose = require('mongoose');


// 8.1
const dotenv = require('dotenv');



//load env configuration. 8.2
dotenv.config();

// 1 Create this function to connect with db. I making a this function to connect to mongodb.
//  Now go to index.js // 6

const connectDB = async () => {
    try {

      // normal url daalke dikana. Process.env.MONGODB_URI is 8.3. Now ek baar chalake dikha dena . Then make model // 9
      const conn = await mongoose.connect(process.env.MONGODB_URI);

      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
}

module.exports = connectDB;
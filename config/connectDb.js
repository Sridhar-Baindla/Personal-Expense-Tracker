const mongoose = require("mongoose");
const colors = require("colors");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL); // Replace "process.env.MONGO_URL" with your MongoDB connection String (or) assign connection string to MONGO_URL in .env file. Note: Connection string should be upto database name specified which is already created.
    console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};
connectDb()
module.exports = connectDb;

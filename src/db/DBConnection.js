import mongoose from "mongoose";
import { DB_NAME } from "./../constants.js";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! \n DB HOST : ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log("MongoDB Connection Failed : ", err);
    process.exit(1);
  }
};

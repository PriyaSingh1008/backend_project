import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";
import connectDB from "./db/index.js";
const coonectDB=async()=>{
    try{
      const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n MongoDB connected`);
    }catch(error){
        console.log("MONGODB connection error",error);
        process.exit(1)
    }
} 
export default connectDB
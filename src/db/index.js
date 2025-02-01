import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`\nDatabase connected successfully: ${connection.connection.host}\n`);
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); 
    }
};

export default connectDB;

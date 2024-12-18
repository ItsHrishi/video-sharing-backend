import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${DB_NAME}`
    );
    // check:  what is this connection instance
    console.log(
      `MongoDb connected!! Connection host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED!! : ", error);
    // check:  what are the exit code and what is process.exit?
    process.exit(1);
  }
};

export default connectDb;

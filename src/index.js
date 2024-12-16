// require("dotenv").config({ path: "./env" }); // old way to do it
import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server running on port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connect failed !! : ", error);
  });
/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error : ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App listening on port : ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
    throw err;
  }
})();

*/

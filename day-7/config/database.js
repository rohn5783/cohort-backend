import mongoose from "mongoose";
import app from "../src/app.js";

function connectTodb() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to database");
  });
}

export default connectTodb;

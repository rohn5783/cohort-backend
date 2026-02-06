import mongoose from "mongoose";


function connectTodb() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to database");
  });
}

export default connectTodb;
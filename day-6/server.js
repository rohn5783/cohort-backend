import app from "./src/app.js";
import mongoose from "mongoose";

function connectDb() {
  mongoose.connect(
    "mongodb+srv://devXrohit:ZVaLnoCaBBqCDMfb@cluster0.wmyut6f.mongodb.net/"
   
  )
   .then(()=> {
        console.log("Connected to Database")
    })
}
connectDb();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
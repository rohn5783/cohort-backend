import app from "./src/app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import connectTodb from "./config/database.js";
// app.get("/", (req, res) => {
//   res.send("Hare Krishna!");
// });


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


connectTodb();

export default app;
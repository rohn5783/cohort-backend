import connectTodb from "./Config/database.js";
import app from "./src/app.js";

import dotenv from "dotenv";
dotenv.config();

connectTodb();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

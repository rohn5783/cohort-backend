import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: [true, "email already exists"],
  },

  password: String,
});

const userModel = mongoose.model("User", userSchema);

export default userModel;

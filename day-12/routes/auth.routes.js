import express, { json } from "express";

import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

const authRouter = express.Router();
//  post request for register
authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      message: "Email already exists",
    });
  }

  const user = await userModel.create({ name, email, password });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

res.cookie("jwt_token", token)


  res.status(201).json({
    message: "User created successfully",
    user,
    token,
  });
});

// get requests for all users

authRouter.get("/fetch", async (req, res) => {
  const users = await userModel.find();
  res.status(200).json({
    message: "Users fetched successfully",
    users,
  });
});

export default authRouter;

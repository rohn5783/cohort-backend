import  express from "express";
const router = express.Router();
import userModel from "../model/user.model.js";
import jwt from "jsonwebtoken";



router.post("/register", async (req, res)=> {
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
})
 router.post("/login", async(req, res)=> {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).json({
            message: " user not  not found with this email",
        });
    }
const isPasswordMatched   = user.password === password;

if (!isPasswordMatched) {
    return res.status(400).json({
        message: "Invalid password",
    });
}
const token = jwt.sign(
    {
        id: user._id,
    },
    process.env.JWT_SECRET,
);
res.cookie("jwt_token", token)
res.status(200).json({
    message: "Login Successful",
    user,
    token,
});
   
   
 })

export default router;
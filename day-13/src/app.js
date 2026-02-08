import express from 'express';
import authRouter from "../routes/auth.route.js";
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/auth", authRouter);
app.use(cookieParser());




export default app;

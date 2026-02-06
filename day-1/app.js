import express from "express";

 const app = express();

 app.get('/', (req,res)=> {
    res.send("Hare Krishna")
 }).listen(3000)
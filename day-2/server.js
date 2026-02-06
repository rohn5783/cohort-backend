import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send("Hare Krishna");
}).listen(5000);

app.get('/about', (req, res) => {
  res.send("Hare Krishna Hare Ram");
})



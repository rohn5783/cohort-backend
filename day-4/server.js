import app from "./src/app.js";

app.get("/", (req, res) => {
  res.send("Hello World");
});

const notes = [
  // {
  //     "title": " test title",
  //     "description" : "test description 1"
  // }
];

app.post("/notes", (req, res) => {
  notes.push(req.body);

  console.log(req.body);

  res.send("notes created");
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.delete("/notes/:id", (req, res) => {
  delete notes[req.params.id];
  res.send("note deleted");
});

app.patch('/notes/:id', (req,res)=> {
notes[req.params.id] = req.body;
res.send("note updated");
})



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

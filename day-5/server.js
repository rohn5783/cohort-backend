import app from "./src/app.js";

const notes = [];

app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "Note created successfully",
  });
  console.log(notes);
});

app.get("/notes", (req, res) => {
  res.send(notes);
  res.status(200).json({
    notes: notes,
  });
});

app.delete("/notes/:id", (req, res) => {
  delete notes[req.params.id];
  res.status(204).json({
    message: "Note deleted successfully",
  });
});

app.patch("/notes/:id", (req, res) => {
  notes[req.params.id] = req.body;
  res.status(200).json({
    message: "Note updated successfully",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

import express from "express";
import noteModel from "../models/notes.model.js";
import cors from "cors";
const app = express();


app.use(cors())
app.use(express.json());
app.use(express.static("public"));

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
 const note =  await noteModel.create({title, description
  })

  res
    .status(201)
    .json({ message: "Note created successfully", note });
});

app.get("/notes", async (req, res)=> {
    const notes = await noteModel.find();
    res.status(200).json({
      message: "Notes retrieved successfully",
      notes,
    });
})

app.delete('/notes/:id', async (req, res)=> {
    const id = req.params.id
    await noteModel.findByIdAndDelete(id);
    res.status(200).json({
        message: "Note deleted successfully"
    });
})

app.patch("/notes/:id", async (req, res)=> {
    const id = req.params.id;
    const {description} = req.body;
    await noteModel.findByIdAndUpdate(id, {description});
    res.status(200).json({
        message: "Note updated successfully"
    });
})

app.use("*name", (req, res)=> {
    res.sendFile('index.html', {root: "./public"})

})

export default app;

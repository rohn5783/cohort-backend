import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [note, setnote] = useState([
    {
      title: "first note",
      description: "this is my first note",
    },
    {
      title: "second note",
      description: "this is my second note",
    },
    {
      title: "third note",
      description: "this is my third note",
    },
    {
      title: "fourth note",
      description: "this is my fourth note",
    },
    {
      title: "fifth note",
      description: "this is my fifth note",
    },
    {
      title: "sixth note",
      description: "this is my sixth note",
    },
  ]);
  console.log("hello integration")
function fetchNotes() {
  axios.get("http://localhost:3000/notes").then((res) => {
  setnote(res.data.notes);
});
}
useEffect(()=> {
  fetchNotes();
},[])

function handleSubmit(e) {
  e.preventDefault();
  const {title, description} = e.target.elements;
  console.log(title.value, description.value)
  axios.post("http://localhost:3000/notes", {
    title: title.value,
description: description.value
  }).then((res) => {
    console.log(res.data);
    fetchNotes();
  });





}
function handleDelete(noteId) {
  
  console.log(noteId)
  axios.delete(`http://localhost:3000/notes/${noteId}`).then((res) => {
    console.log(res.data);
    fetchNotes();
  });


}

function handleUpdate(noteId,oldDescription) {
  console.log(noteId)
  const newDescription = prompt("Enter new description", oldDescription);
  axios.patch(`http://localhost:3000/notes/${noteId}`, {
    description: newDescription || oldDescription
  }).then((res) => {
    console.log(res.data);
    fetchNotes();
  });
}


  return (
    <>
    <form className="note-create-form" onSubmit={handleSubmit}>
      <input name="title" type="text" placeholder=" Enter title" />
      <input name="description" type="text" placeholder=" Enter description" />

      <button type="submit">Create Note</button>  
    </form>
      <div className="notes">
        {note.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
      <button type="button" className="delete" onClick={() => handleDelete(note._id)}>Delete Note</button>
      <button type="button" className="edit" onClick={() => handleUpdate(note._id, note.description)}>Update Note</button>

            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

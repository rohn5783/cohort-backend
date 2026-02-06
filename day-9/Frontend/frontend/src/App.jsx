import { useState } from "react";
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
axios.get("http://localhost:3000/notes").then((res) => {
  setnote(res.data.notes);
});

  return (
    <>
      <div className="notes">
        {note.map((note) => {
          return (
            <div className="note">
              <h1>{note.title}</h1>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

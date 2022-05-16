import React from "react";

export default function NoteList({ notes = [] }) {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "12px",
        flexDirection: "column",
      }}
    >
      {notes.map((note) => (
        <div key={note.id}>
          <div>{note.title}</div>
          <div>{note.content}</div>

          <button onClick={() => {}}>Edit</button>
        </div>
      ))}
    </div>
  );
}

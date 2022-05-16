import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const [seletedNote, setSeletedNote] = useState(null);

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
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

              <button onClick={() => setSeletedNote(note.id)}>Edit</button>
            </div>
          ))}
        </div>
        <div>
          <h1>Note Editor</h1>
          <lable htmlFor="title"> Title </lable>
          <div>
            <input
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <lable htmlFor="content"> Content </lable>
          <div>
            <input
              id="content"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>
          <br />
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              onClick={() => {
                setTitle("");
                setContent("");
                setSeletedNote(null);

                if (seletedNote) {
                  setNotes((lastestHistory) =>
                    lastestHistory.map((item) => {
                      if (item.id === seletedNote) {
                        return { ...item, title, content };
                      }
                      return item;
                    })
                  );
                } else {
                  setNotes((lastestHistory) => [
                    { id: Date.now(), title, content },
                    ...lastestHistory,
                  ]);
                }
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

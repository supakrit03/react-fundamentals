import { useState, useEffect } from "react";

import NoteList from "./NoteList";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const [seletedNote, setSeletedNote] = useState(null);

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <NoteList notes={notes} onPickNote={() => {}} onDeleteNote={() => {}} />
        <div>
          <h1>Note Editor</h1>
          <label htmlFor="title"> Title </label>
          <div>
            <input
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <label htmlFor="content"> Content </label>
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
              disabled={!(title && content)}
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

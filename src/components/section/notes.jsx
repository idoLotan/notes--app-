import React from "react";
import Note from "./note";

const Notes = ({ onClick, onDelete, notes }) => {
  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          onClick={onClick}
          onDelete={onDelete}
          text={note.text}
          title={note.title}
          id={note.id}
          creationDate={note.date}
          lastUpdatedDate={note.lastUpdatedDate}
        />
      ))}
    </div>
  );
};

export default Notes;

import React from "react";
import AddNote from "./addNote";
import Notes from "./notes";
import Modal from "../../modal/modal";
import EditNote from "./editNote";
import { useEffect, useState } from "react";
import localforage from "localforage";

const Section = () => {
  const [notes, setNotes] = useState([]);
  const [currentEditedNote, setCurrentEditedNote] = useState([]);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    localforage.getItem("notes").then((notesLst) => {
      if (notesLst === null) {
        setNotes([]);
        console.log(notesLst);
      } else {
        setNotes(notesLst);
      }
    });
  }, []);

  const setStoredNotes = () => {
    localforage.setItem("notes", notes);
  };

  setStoredNotes();

  function toggle(id) {
    setIsShowing(!isShowing);
    setCurrentEditedNote(notes.find((note) => note.id === id));
  }

  const addNote = (note) => {
    const id = Math.floor(Math.random() * 1000);
    const newNote = { id, ...note };
    setNotes([...notes, newNote]);
  };

  const editNote = (updatedNote) => {
    setNotes(
      notes.map((note) => {
        if (note.id === updatedNote.id) {
          return updatedNote;
        }
        return note;
      })
    );
  };

  const deleteNote = (id) => {
    if (window.confirm("are you sure you want to delete this note?") === true) {
    } else {
      return;
    }
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="section">
      <AddNote onAdd={addNote} />
      <Notes notes={notes} onDelete={deleteNote} onClick={toggle} />
      <Modal isShowing={isShowing} onClose={toggle}>
        <EditNote note={currentEditedNote} onSubmit={editNote} />
      </Modal>
    </div>
  );
};

export default Section;

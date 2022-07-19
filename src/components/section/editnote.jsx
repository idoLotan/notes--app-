import React from "react";
import { useState } from "react";
import Button from "../../UIKit/element/Button/Button";
import { formatDate } from "../../utils";

function EditNote({ note, onSubmit }) {
  const [draftNote, setDraftNote] = useState(note);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...draftNote, lastUpdatedDate: formatDate(new Date()) });
  };

  const handleTitleChange = (e) => {
    const updatedTitle = e.currentTarget.value;
    setDraftNote({ ...draftNote, title: updatedTitle });
  };

  const handleTextChange = (e) => {
    const updatedText = e.currentTarget.value;
    setDraftNote({ ...draftNote, text: updatedText });
  };

  return (
    <form className="add-form">
      <div className="form-control">
        <input
          type="text"
          className="add-title"
          value={draftNote.title}
          onChange={handleTitleChange}
        ></input>
        <textarea
          type="text"
          value={draftNote.text}
          onChange={handleTextChange}
        />
        <Button text={"Edit"} onSubmit={handleSubmit} />
      </div>
    </form>
  );
}

export default EditNote;

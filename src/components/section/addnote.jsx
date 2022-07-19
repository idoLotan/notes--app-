import React from "react";
import { useState } from "react";
import Button from "../../UIKit/element/Button/Button";
import { formatDate } from "../../utils";

function AddNote({ onAdd }) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("please add a text and title");
      return;
    }

    let date = formatDate(new Date());
    onAdd({ text, date, title });
  };

  return (
    <form className="add-form">
      <div className="form-control">
        <input
          className="add-title"
          placeholder="Your title..."
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          type="text"
          placeholder="Your note..."
          onChange={(e) => setText(e.target.value)}
        />

        <Button text={"add"} onSubmit={onSubmit}></Button>
      </div>
    </form>
  );
}

export default AddNote;

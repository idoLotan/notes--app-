import React from "react";
import Icon from "../../UIKit/element/Icon/Icon";

const Note = ({
  onDelete,
  onClick,
  text,
  creationDate,
  lastUpdatedDate,
  id,
  title,
}) => {
  return (
    <div className="note">
      <div onClick={() => onClick(id)}>
        <h3 className="note-title">{title}</h3>
        <div className="note-text">{text}</div>
      </div>

      <div className="note-date">Created: {creationDate}</div>

      {lastUpdatedDate && (
        <div className="note-date">Last Updated: {lastUpdatedDate}</div>
      )}
      <div className="note-delete" onClick={() => onDelete(id)}>
        <Icon icon={"trash-alt"} />
      </div>
    </div>
  );
};

export default Note;

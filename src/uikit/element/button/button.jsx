import React from "react";
import "./Button.css";

const Button = ({ onSubmit, text }) => {
  return (
    <button onClick={onSubmit} className="btn">
      {text}
    </button>
  );
};

export default Button;

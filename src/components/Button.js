import React from "react";

export default function Button({ handleClick }) {
  return (
    <button style={buttonStyle} onClick={handleClick}>
      Next Quote
    </button>
  );
}

const buttonStyle = {
  border: "1px solid #0f7173",
  borderRadius: "5px",
  background: "transparent",
  color: "#000",
  fontSize: "1rem",
  padding: ".5em .8em",
  margin: "1em",
  cursor: "pointer",
};

import React from "react";

function Button(props) {
  return (
    <>
      <button
        onClick={props.click}
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          borderRadius: "20px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {props.text}
      </button>
    </>
  );
}

export default Button;

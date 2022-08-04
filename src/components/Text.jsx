import React, { useState } from "react";

function Text() {
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("");

  return (
    <div>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show or Hide Name
      </button>
      <button
        onClick={() => {
          setTextColor(textColor === "black" ? "blue" : "black");
        }}
      >
        Change Text Colour
      </button>
      {showText && <h1 style={{ color: textColor }}>Show My Name</h1>}
    </div>
  );
}

export default Text;

import React from "react";
import { useState } from "react";

function Basic() {
  const [state, setState] = useState({
    text: "I have not been clicked",
  });

  const { text } = state;

  return (
    <div>
      <button
        onClick={() => {
          setState({ text: "I have been clicked!" });
        }}
      >
        Test the text
      </button>
      <p>{text}</p>
    </div>
  );
}

export default Basic;

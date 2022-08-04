import React, { useState } from "react";

function Count() {
  const [age, setAge] = useState(1);

  const increaseAge = () => {
    setAge(age * 2);
  };

  return (
    <div>
      {age}
      <button onClick={increaseAge}> Increase Age</button>
    </div>
  );
}

export default Count;

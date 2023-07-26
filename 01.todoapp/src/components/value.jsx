import React, { useState } from "react";

const Valuech = () => {
  const [Value, setValue] = useState(1);
  const [parity, setparity] = useState("");

  
  const valuechange = () => {
    setValue(Value + 1);
  };
  return (
    <div>
      <button onClick={valuechange}>add</button>
      <p>the name is {Value}</p>
      <p>the parity is {Value % 2 === 0 ? "even" : "odd"}</p>
    </div>
  );
};

export default Valuech;

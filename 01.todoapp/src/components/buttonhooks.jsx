import React, { useState } from 'react';

const ButtonHooks = () => {
  // Initialize count state variable with initial value 0 and a setter function setCount
  const [count, setCount] = useState(0);

  // Function to handle the button click and update the count
  const handleButtonClick = () => {
    // Increment the count by 1 whenever the button is clicked
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleButtonClick}>Increment Count</button>
    </div>
  );
};

export default ButtonHooks;

import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {setCount(count + 1)}
  return (
    <> 
      <h2>You clicked {count} times </h2>
      <button onClick={handleClick} className="btn">Click to add 1</button>
    </>
  )
};

export default UseStateBasics;

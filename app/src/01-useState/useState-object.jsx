import { useState } from "react";

const UseStateObject = () => {
  // Initialize state value as an object which contains three values
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 33,
    hobby: 'playing chess'
  });


  const handleClick = () => {
    // If we just want to update only the person's name we use the spread operator.
    setPerson({...person, name: 'Michael'});
  }

  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h2>Enjoys {person.hobby}</h2>
      <button className="btn" onClick={handleClick}>Change me</button>
    </div>
  )
};

export default UseStateObject;

import { useState, useEffect } from "react";

const UseEffectMultiple = () => {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  // First useEffect
  useEffect(() => {console.log('Hello from the first useEffect');}, [firstCount, secondCount]);

  // Second useEffect
  useEffect(() => {console.log('Hello from the second useEffect');}, [secondCount]);


  return (
    <>
      <h2>Multiple useEffects</h2>
      <div>
        <h3>First count: {firstCount}</h3>
        <button className="btn" onClick={() => setFirstCount(firstCount + 1)}>
          Increase the First Count
        </button>
      </div>
      <div>
        <h3>Second Count: {secondCount}</h3>
        <button className="btn" onClick={() => setSecondCount(secondCount + 2)}>
          Increase the Second Count
        </button>
      </div>
    </>
  );
};

export default UseEffectMultiple;

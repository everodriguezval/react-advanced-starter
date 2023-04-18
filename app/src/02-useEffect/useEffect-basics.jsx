import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [count, setCount] = useState(0);
  // When we add an empty pair of square brackets as our second argument to useEffect:
  // this tells useEffect to run only once, on the initial page render. 
  useEffect(() => {console.log('Hello World', count);}, [count]);

  return (
    <>
      <h2>useEffect Basics</h2>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;

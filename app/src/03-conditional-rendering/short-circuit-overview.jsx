import { useState } from "react";

const ShortCircuitOverview = () => {
  // Initialized with a falsy value
  const [text, setText] = useState('');
  // Initialized with a truthy value
  const [name, setName] = useState('Michael');
  return (
    <>
      <h2>Short Circuit</h2>
      <h3>Falsy OR : {text || 'Hello World'}</h3>
      <h3>Falsy AND : {text && 'Hello World'}</h3>
      <h3>Truthy OR : {name || 'Hello World'}</h3>
      <h3>Truthy AND : {name && 'Hello World'}</h3>      
    </>
  );
};

export default ShortCircuitOverview;

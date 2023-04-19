import React, { useState } from "react";

const ShortCircuitExample = () => {
  // Falsy
  const [text, setText] = useState("");

  // Truthy
  const [name, setName] = useState("Michael");

  const [user, setUser] = useState({ name: "John" });
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div>
      <h2>Short Circuit Example</h2>
      <h3>{ text || 'Some default value' }</h3>
      {user && <SomeComponent name={user.name} />}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
          <h3>Some return</h3>
          <h3>{name}</h3>
    </div>
  )
}

export default ShortCircuitExample;

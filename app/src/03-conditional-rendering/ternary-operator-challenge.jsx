import React, { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'Evelyn' });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <h2>Ternary Operator : User Challenge</h2>
      {user ? (
        <div>
          <h4>Hello there {user.name}</h4>
          <button className="btn" onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button className="btn" onClick={login}>Login</button>
        </div>
      )}
    </>
  )  
};

export default UserChallenge;

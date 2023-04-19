import { useState } from "react";
import Navlink from '../05-context-api/propdrill-challenge-navlinks'

const Navbar = () => {
  // Create a user state variable
  const [user, setUser] = useState({name: 'Evelyn'})

  // Create a logout function
  const logout = () => {
    setUser(null);
  }

  return (
    <div className="navbar">
      <h5>Context API</h5>

      {/** Pass user and logout down to Navlinks component as props */}
      <Navlink user={user} logout={logout} />
    </div>
  );
};

export default Navbar;

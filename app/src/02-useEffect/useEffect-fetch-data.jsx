import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  // TODO 1: set up 'users, setUsers' state values
  const [users, setUsers] = useState([])

  /**
   * TODO 2: Set up asynchronous function getUsers()
   * await fetch, pass in url, assign to variable res
   * await res.json(), assign to variable data
   * setUsers to data variable
   */
  async function getUsers() {
    try {
      let res = await fetch(url);
      let data = await res.json();
      setUsers(data)
    } catch (error) {
      console.log('Error! Something went wrong:', error)
    }
  }
  /**
   * TODO 3: Set up useEffect with callback and dependency array
   * Invoke getUsers() in useEffect callback
   */
  useEffect(() => {getUsers();}, []);
  return (
    // TODO 4: Set up HTML and iterate over users variable
    // Return list item for each user.
    <>
      <h2>useEffect - Fetch Data</h2>
      <ul className='users'>
        {users.map((user) => { 
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h3>{login}</h3>
                <a href={html_url} target="_blank" rel="noreferrer">
                  Profile
                </a>
              </div>
            </li>
          );
        })}       
      </ul>
    </>
  );
};

export default UseEffectFetchData;

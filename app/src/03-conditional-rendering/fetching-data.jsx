import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const FetchingData = () => {
  // Setting up state values
  const [user, setUser] = useState([true]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      try {
        let res = await fetch(url);
        // Is the response ok? ok property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not
        if (!res.ok) {
          setIsLoading(false);
          setIsError(true);
        };
        let data = await res.json();
        console.log(data);
        // Using setUser function to update the user state
        setUser(data)

      } catch (error) {
        // Set error state to true
        setIsError(true);
        console.log('Something went wrong', error);
      }
      // After our try/catch blocks we set our loading state to false because we're done loading (two options: everything was successful or there was an error but it finished loading)
      setIsLoading(false);
    };
    fetchUser()
  }, []);

  // If the data is loading...
  if (isLoading) {
    return <h2>Loading...</h2>;
}
  // If there is an error...
  if (isError) {
    return <h2>Error!</h2>;
};
  // When the data is loaded...
  return (
    <div>
        <img style={{width: '150px', borderRadius: '25px'}}
                     src={user.avatar_url}
                     alt={user.name}
         />
        <h2>{user.name}</h2>
        <h3>Works at {user.company}</h3>
        <p>{user.bio}</p>
    </div>
  )
};

export default FetchingData;

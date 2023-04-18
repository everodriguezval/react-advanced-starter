import {useState} from "react";
import { data } from '../data';

const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    
    const removePerson = (id) => {
      console.log(id);
      // Filter people array for those whose ID isn't
      // equal to the id argument being passed in.
      const newPeople = people.filter((person) => person.id !== id);
      // Update the people state with the filtered array.
      setPeople(newPeople); 
      // We can pass our filter functionality directly into our call to setPeople!
      //setPeople(people.filter((person) => person.id !== id));

    };

    const clearPeople = () => {
      // Set our people variable to an empty array.
      setPeople([])
    };
    
    return (
      <>    
        <h2>useState array example</h2>
        {people.map((person) => {
          const { id, name } = person;
          return (
          // we will generate this div four times for every person object in our data.js
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)} className="btn">Remove me</button>
          </div>
          )
        })}
        <div>
          <button onClick={clearPeople} className="btn">Clear the list</button>
        </div>
      </>

    )
  };
  
  // to be able to filter the array when clicking a button for a specific person
  // we need to pass a unique value such as id. To be able to pass this id from our
  // map method we need to add add a parameter id to your removePerson function expression and
  // then add onClick={() => removePerson(id)}
  // This is how we pass arguments into our function references. We first add an arrow function as our callback, then we call the function that we want to invoke, passing in whatever value we need as the argument.
  export default UseStateArray;
  
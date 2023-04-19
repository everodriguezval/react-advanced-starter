import { useState } from "react";

const ControlledInputs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Function which will be invoked every time the user types into the input
//   const handleChange = (event) => {
//     console.log(event.target.value);
//     setName(event.target.value);
// }
  const handleSubmit = (event) => {
    event.preventDefault();
    const details = {name, email};
    console.log(details);
  } 

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input value={name} onChange={(event) => setName(event.target.value)} type="text" className="form-input" id="name" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="form-input" id="email" />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};

export default ControlledInputs;
  
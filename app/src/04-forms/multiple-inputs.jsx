import React, { useState } from "react";

const MultipleInputs = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street_address1: "",
    street_address2: "",
    city: "",
    country: "",
    postcode: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setFormData({
      // Preserve the values that aren't being updated
      ...formData,
      [e.target.name]: e.target.value
});
};

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            onChange={handleChange}
            value={formData.name}
            name="name"
            type="text"
            className="form-input"
            id="name"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            onChange={handleChange}
            value={formData.email}
            name="email"
            type="email"
            className="form-input"
            id="email"
          />
        </div>
        <div className="form-row">
          <label htmlFor="street-address1" className="form-label">
            Street Address 1
          </label>
          <input
            onChange={handleChange}
            value={formData.street_address1}
            name="street_address1"
            type="text"
            className="form-input"
            id="street-address-1"
          />
        </div>
        <div className="form-row">
          <label htmlFor="street-address2" className="form-label">
            Street Address 2
          </label>
          <input
            onChange={handleChange}
            value={formData.street_address2}
            name="street_address2"
            type="text"
            className="form-input"
            id="street-address-2"
          />
        </div>
        <div className="form-row">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            onChange={handleChange}
            value={formData.city}
            name="city"
            type="text"
            className="form-input"
            id="city"
          />
        </div>
        <div className="form-row">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            onChange={handleChange}
            value={formData.country}
            name="country"
            type="text"
            className="form-input"
            id="country"
          />
        </div>
        <div className="form-row">
          <label htmlFor="postcode" className="form-label">
          Postcode
          </label>
          <input
            onChange={handleChange}
            value={formData.postcode}
            name="postcode"
            type="text"
            className="form-input"
            id="postcode"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};

export default MultipleInputs;

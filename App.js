import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({ name: '', age: '' });
  const [errors, setErrors] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = { name: '', age: '' };
    let isValid = true;

    // Name validation: should not be empty
    if (!formData.name) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    // Age validation: should be a valid number between 1 and 120
    const age = parseInt(formData.age, 10);
    if (!formData.age) {
      tempErrors.age = 'Age is required';
      isValid = false;
    } else if (isNaN(age) || age < 1 || age > 120) {
      tempErrors.age = 'Age must be between 1 and 120';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          min="1"
          max="120"
        />
        {errors.age && <p>{errors.age}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;


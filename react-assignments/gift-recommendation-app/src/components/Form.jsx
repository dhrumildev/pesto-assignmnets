import React, { useState } from 'react';

const Form = ({ onFormSubmit }) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here if needed
    onFormSubmit({ age, gender, interests });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Age:
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        Gender:
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
      </label>
      <label>
        Interests:
        <input type="text" value={interests} onChange={(e) => setInterests(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;

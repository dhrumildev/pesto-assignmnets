
import React, { useState } from 'react';
import './App.css';

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();

    const birthDate = new Date(birthdate);

    const ageInMilliseconds = today - birthDate;
    const ageInYears = (birthdate && birthdate > new Date()) ? `Your age is: ${Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000))} years` : "Please enter a valid date";

    setAge(ageInYears);
  };

  return (
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <div>
        <label htmlFor="birthdate">Enter your birthdate:</label>
        <input
          type="date"
          id="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>{age}</p>}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <AgeCalculator />
    </div>
  );
}

export default App;

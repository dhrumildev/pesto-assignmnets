
import React, { useState } from 'react';
import './App.css';

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);
  const [error, setError] = useState('');


  const calculateAge = () => {
    if (!birthdate) {
      setError('Please enter your birthdate');
      return;
    }

    const today = new Date();
    const birthDate = new Date(birthdate);

    if (isNaN(birthDate.getTime())) {
      setError('Invalid date format. Please enter a valid date.');
      return;
    }

    if(birthDate.getTime()>=new Date().getTime()){
      setError('Birthdate can not be a future or current date.');
      return;
    }

    const ageInMilliseconds = today - birthDate;

    const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    setAge(years);
    setError('');

  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <label>
        Enter your birthdate:
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </label>
      <button onClick={calculateAge}>Calculate Age</button>
      {error && <p className="text-danger mt-2">{error}</p>}
      {age !== null && <p>Your age is: {age} years</p>}
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

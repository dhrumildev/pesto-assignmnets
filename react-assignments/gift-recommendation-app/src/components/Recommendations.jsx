import React from 'react';

const Recommendations = ({ recommendations }) => {
  return (
    <div>
      <h2>Gift Recommendations</h2>
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>{recommendation.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
import React from 'react';
import { useSelector } from 'react-redux';

const Recommendations = () => {
  const recommendations = useSelector((state) => state.gifts.recommendations);
  const status = useSelector((state) => state.gifts.status);
  const error = useSelector((state) => state.gifts.error);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

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

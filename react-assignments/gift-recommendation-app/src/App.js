import React, { useState, lazy, Suspense } from 'react';
import axios from 'axios';
import Form from './components/Form';
const Recommendations = lazy(() => import('./components/Recommendations'));

const App = () => {
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = async (preferences) => {
    try {
      const response = await axios.post('YOUR_OPENAI_API_ENDPOINT', preferences, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
        },
      });
      setRecommendations(response.data.recommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error.message);
    }
  };

  return (
    <div>
      <h1>Gift Recommendation App</h1>
      <Form onFormSubmit={fetchRecommendations} />
      <Suspense fallback={<div>Loading...</div>}>
        <Recommendations recommendations={recommendations} />
      </Suspense>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
// import OpenAI from "openai";
// const { Configuration, OpenAIApi } = require("openai");
import OpenAI from "openai";

// const openai = new OpenAI({ apiKey: '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' });


const App = () => {

  // const configuration = new Configuration({
  //   apiKey: "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",
  // });
  // const openai = new OpenAIApi(configuration);

  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = async (preferences) => {
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        "model": "gpt-3.5-turbo",
        "messages": [{ "role": "user", "content": "Say this is a test!" }],
        "temperature": 0.7
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
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
      {/* Display recommendations here */}
    </div>
  );
};

export default App;

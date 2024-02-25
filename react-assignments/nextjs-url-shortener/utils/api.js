import axios from 'axios';

const API_BASE_URL = 'https://api.shrtco.de/v2';

export const shortenUrl = async (url) => {
  const response = await axios.post(`${API_BASE_URL}/shorten?url=${url}`);
  return response.data;
};

// Add other API functions as needed

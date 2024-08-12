import axios from 'axios';

export const fetchAllCards = async (endpoint) => {
  const  BaseUrl = "http://localhost:8080";
  try {
    const response = await axios.get(`${BaseUrl}/${endpoint}`);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

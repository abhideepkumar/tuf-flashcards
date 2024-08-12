import axios from 'axios';

const BaseUrl = 'http://localhost:8080';
const UpdateCardData = async (endpoint, cardID, question, answer) => {
    try {
        const response = await axios.put(`${BaseUrl}/${endpoint}`, { cardID, question, answer });
        console.log('Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default UpdateCardData;

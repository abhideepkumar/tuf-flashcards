import axios from 'axios';

const BaseUrl = 'http://localhost:8080';

export const AddCardData = async ( question, answer ) => {
    try {
        console.log('add: ', question, answer);
        const response = await axios.post(`${BaseUrl}/add`, {
            question,
            answer,
        });
        console.log('Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};

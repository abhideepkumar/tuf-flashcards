import axios from 'axios';

const BaseUrl = 'http://localhost:8080';

const deleteCardData = async (endpoint, cardID) => {
    try {
        console.log('DeleteCardData endpoint:', endpoint, 'cardID:', cardID);
        const response = await axios.delete(`${BaseUrl}/${endpoint}`, {
            data: { cardID } 
        });
        console.log('Response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};

export default deleteCardData;

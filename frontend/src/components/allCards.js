import React, { useEffect, useState } from 'react';
import EditCards from './editCards';
import DeleteCards from './deleteCards';
import { fetchAllCards } from '../services/fetchAllCards';

const AllCards = () => {
    const [questions, setQuestions] = useState([]);
    const [visible, setVisible] = useState(true);
    const [editVisible, setEditVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [SelectedCard, setSelectedCard] = useState(null);


    useEffect(() => {
        const fetchCards = async () => {
            const data = await fetchAllCards('cards');
            setQuestions(data);
            console.log('Fetched data:', data);
        };
        fetchCards();
    }, []);

    const OnEditCards = (cardData) => {
        console.log('Edit mode of ', cardData);
        setEditVisible(true);
        setSelectedCard(cardData);
    };
    const onDeleteCards = (cardData) => {
        console.log('Delete mode of ', cardData);
        setDeleteVisible(true);
        setSelectedCard(cardData);
    };

    const handleCloseModal = () => {
        setEditVisible(false);
        setDeleteVisible(false);
    };

    return (
        <div className="w-full p-6 bg-gray-300 rounded-md">
            <p className="flex justify-between items-center text-xl font-bold text-gray-800 mb-4">
                All Cards{' '}
                <button
                    className="px-4 py-1 text-white bg-black rounded-md hover:text-black hover:bg-white transition duration-200"
                    onClick={() => {
                        setVisible(!visible);
                    }}
                >
                    {visible ? 'Show' : 'Hide'}
                </button>
            </p>
            {!visible && (
                <div className="space-y-4">
                    {questions.map((question, index) => (
                        <div key={index} className="p-4 bg-gray-100 rounded-md shadow-sm border border-gray-200">
                            <p className="font-medium text-gray-700">
                                <span className="font-semibold text-gray-900">Question:</span> {question.question}
                            </p>
                            <p className="mt-2 text-gray-600">
                                <span className="font-semibold text-gray-900">Answer:</span> {question.answer}
                            </p>
                            <button
                                className="text-sm mt-4 mr-4 px-4 py-2 text-white bg-teal-500 rounded-md hover:text-black hover:bg-white transition duration-200"
                                onClick={() => {
                                    OnEditCards(question);
                                }}
                            >
                                Edit
                            </button>
                            <button
                                className="text-sm mt-4 px-4 py-2 text-white bg-red-600 rounded-md hover:text-black hover:bg-white transition duration-200"
                                onClick={() => {
                                    onDeleteCards(question.cardID);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
            {editVisible && (
                <EditCards
                    isOpen={editVisible}
                    onClose={handleCloseModal}
                    cardData={SelectedCard}
                />
            )}
            {deleteVisible && (
                <DeleteCards
                    isOpen={deleteVisible}
                    onClose={handleCloseModal}
                    cardData={SelectedCard}
                />
            )}
        </div>
    );
};

export default AllCards;

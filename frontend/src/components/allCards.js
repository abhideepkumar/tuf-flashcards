import React, { useState } from 'react';
import Questions from '../data/questions.json';
import EditCards from './editCards';
import DeleteCards from './deleteCards';

const AllCards = () => {
    const [questions, setQuestions] = useState(Questions);
    const [visible, setVisible] = useState(false);
    const [editVisible, setEditVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [SelectedCard, setSelectedCard] = useState(null);

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

    const handleOnSave = () => {
        window.location.reload();
    };
    const handleOnDelete = () => {
        window.location.reload();
    };
    return (
        <div className="w-full p-6 bg-slate-300 rounded-md">
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
                                    OnEditCards(question.id);
                                }}
                            >
                                Edit
                            </button>
                            <button
                                className="text-sm mt-4 px-4 py-2 text-white bg-red-600 rounded-md hover:text-black hover:bg-white transition duration-200"
                                onClick={() => {
                                    onDeleteCards(question.id);
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
                    onSave={handleOnSave}
                    cardData={SelectedCard}
                />
            )}
            {deleteVisible && (
                <DeleteCards
                    isOpen={deleteVisible}
                    onClose={handleCloseModal}
                    onDelete={handleOnDelete}
                    cardData={SelectedCard}
                />
            )}
        </div>
    );
};

export default AllCards;

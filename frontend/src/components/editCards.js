import axios from 'axios';
import React, { useState } from 'react';
import UpdateCardData from '../services/updateCardData';

const EditCards = ({ isOpen, onClose, cardData }) => {
    const [question, setQuestion] = useState(cardData.question);
    const [answer, setAnswer] = useState(cardData.answer);

    const handleSave = async() => {
        await UpdateCardData("edit", cardData.cardID, question, answer)
        onClose();
    };

    return isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-600 opacity-50" onClick={onClose}></div>
            <div className="bg-white p-6 rounded-lg shadow-md z-10 w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Edit existing Card</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="question">
                        Question
                    </label>
                    <input
                        type="text"
                        id="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="answer">
                        Answer
                    </label>
                    <input
                        type="text"
                        id="answer"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 transition duration-200"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                    <button
                        className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 transition duration-200"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

export default EditCards;

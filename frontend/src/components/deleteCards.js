import React from 'react';
import deleteCardData from '../services/deleteCardData';

const DeleteCards = ({ isOpen, onClose, cardData }) => {
    console.log(cardData)
    if (!isOpen) return null;

    const handleConfirm = async() => {
        console.log(cardData)
        await deleteCardData("delete", cardData)
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-600 opacity-50" onClick={onClose}></div>
            <div className="bg-white p-6 rounded-lg shadow-md z-10 w-full max-w-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Confirm Deletion</h2>
                <p className="text-gray-700 mb-4">Are you sure you want to delete this card?</p>
                <div className="flex justify-end space-x-4">
                    <button
                        className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 transition duration-200"
                        onClick={handleConfirm}
                    >
                        Confirm
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
    );
};

export default DeleteCards;

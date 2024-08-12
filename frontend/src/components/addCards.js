import React from 'react';
import { AddCardData } from '../services/AddCardData';

const AddCards = () => {
    const callAddCards = async (event) => {
        event.preventDefault();
        const question = event.target.question.value;
        const answer = event.target.answer.value;
        console.log('compponent', question, answer);
        const response = await AddCardData(question, answer);
        console.log('Response status:', response);
        if (response.affectedRows >0) {
            alert('Card added successfully');
            event.target.reset();
        } else {
            alert('Card not added');
        }
    };
    return (
        <div className="bg-slate-300 p-6 rounded-lg my-5 w-full max-w-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add a New Card</h2>
            <form onSubmit={callAddCards}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="question">
                        Question
                    </label>
                    <input
                        type="text"
                        id="question"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Enter your question"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="answer">
                        Answer
                    </label>
                    <input
                        type="text"
                        id="answer"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Enter the answer"
                    />
                </div>
                <button type="submit" className="w-full bg-black text-white py-2 rounded-md">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddCards;

import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center p-6">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold text-black">Welcome to Flashcard Learning Tool</h1>
                <p className="text-lg text-gray-700 mt-2">
                    An efficient way to study and memorize information with interactive flashcards.
                </p>
            </header>
            <main className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
                <h2 className="text-2xl font-semibold text-black mb-4">Features</h2>
                <ul className="list-disc list-inside mb-6 text-gray-800">
                    <li>
                        Display Flashcards: Present flashcards with a question or term on the front and the answer on
                        the back.
                    </li>
                    <li>Flip Card: Click on a flashcard to reveal the answer.</li>
                    <li>
                        Next/Previous Navigation: Navigate through the flashcards using "Next" and "Previous" buttons.
                    </li>
                    <li>Internal Dashboard: Admin interface for managing flashcards.</li>
                    <li>Database Integration: MySQL for storing and retrieving flashcards.</li>
                </ul>

                    <a href='https://github.com/abhideepkumar/tuf-flashcards' className='text-xl font-semibold text-blue-500 underline'>Link to GitHub</a>
                <pre className="bg-gray-200 p-4 rounded-md mt-2">
                    <code>https://github.com/abhideepkumar/tuf-flashcards</code>
                </pre>
            </main>
        </div>
    );
};

export default Home;

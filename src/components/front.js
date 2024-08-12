import React from 'react';

const FRONT_COMPONENT = ({ question }) => {
    return (
        <div className="w-full flex justify-center">
            <div className="relative w-1/3 h- p-8 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-10 backdrop-filter backdrop-blur-lg"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h2 className="text-3xl font-bold mb-4">Question</h2>
                    <div className="text-xl text-center p-6 bg-white bg-opacity-20 rounded-xl shadow-lg">{question}</div>
                </div>
            </div>
        </div>
    );
};

export default FRONT_COMPONENT;

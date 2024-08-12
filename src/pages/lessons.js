import { React, useState, useEffect } from 'react';
import FlipCard from '../components/cards';
import Questions from '../data/questions.json';
import { Button } from '../components/ui/button';

const Lessons = () => {
    const [questions, setQuestions] = useState(Questions);
    const [questionNumber, setQuestionNumber] = useState(0);

    const backQuestion = () => {
        setQuestionNumber(questionNumber - 1);
    };
    const nextQuestion = () => {
        setQuestionNumber(questionNumber + 1);
    };

    return (
        <div>
            <div>
                <FlipCard question={questions[questionNumber].question} answer={questions[questionNumber].answer} />
            </div>

            <div className="flex justify-between p-5">
                <p></p>
                <Button text="Back" color="bg-black" onClick={backQuestion} />
                <Button text="Next" color="bg-black" onClick={nextQuestion} />
                <p></p>
            </div>
        </div>
    );
};

export default Lessons;

import { React, useState } from 'react';
import FlipCard from '../components/cards';
import Questions from '../data/questions.json';
import { Button } from '../components/ui/button';

const FlashCardsPage = () => {
    const [questions, setQuestions] = useState(Questions);
    const [questionNumber, setQuestionNumber] = useState(0);

    const backQuestion = () => {
        if (questionNumber > 0) setQuestionNumber(questionNumber - 1);
        else alert('This is the first question');
    };
    const nextQuestion = () => {
        if (questionNumber < questions.length - 1) setQuestionNumber(questionNumber + 1);
        else alert('This is the last question');
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

export default FlashCardsPage;

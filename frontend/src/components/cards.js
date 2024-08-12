import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import FRONT_COMPONENT from './front';
import BACK_COMPONENT from './back';

const FlipCard = ({question, answer}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div onClick={handleClick} className="mt-5">
       <FRONT_COMPONENT question={question}/>
      </div>

      <div onClick={handleClick} className="mt-5">
        <BACK_COMPONENT answer={answer}/>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;

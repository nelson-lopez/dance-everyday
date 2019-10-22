import React, { useState } from 'react';
import EditCard from './EditCard';

const DisplayCard = ({ date, description }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [cardState, setCardState] = useState({
    date: date,
    description: description
  });

  const handleOnEdit = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  const handleFlip = (date, description) => {
    /// Set state causing rerender on edit submittion
    setCardState(prevState => ({
      ...prevState,
      date: date,
      description: description
    }));
    setIsClicked(!isClicked);
  };
  //// Conditionally render if edit has been clicked or not
  if (!isClicked)
    return (
      <div>
        <h2>Event Card</h2>
        <h2>{cardState.date}</h2>
        <p>{cardState.description}</p>
        <button onClick={handleOnEdit}>Edit</button>
      </div>
    );
  else
    return (
      <EditCard
        date={cardState.date}
        description={cardState.description}
        handleFlip={handleFlip}
      />
    );
};

export default DisplayCard;

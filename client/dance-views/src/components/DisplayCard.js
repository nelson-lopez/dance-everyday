import React, { useState } from 'react';
import EditCard from './EditCard';

const DisplayCard = ({ date, description, handleDelete, id, name }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [cardState, setCardState] = useState({
    date: date,
    description: description,
    name: name,
    id: id
  });

  const handleOnEdit = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  const handleFlip = (date, description) => {
    /// Set state causing rerender on edit submission
    setCardState(prevState => ({
      ...prevState,
      date: date,
      description: description
    }));
    setIsClicked(!isClicked);
  };
  const handleOnDelete = () => {
    handleDelete(id);
  };
  //// Conditionally render if edit has been clicked or not
  if (!isClicked)
    return (
      <div className = "card">
        <img
        src={
          'https://images.pexels.com/photos/270837/pexels-photo-270837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
        alt="test"
      />
        <h2>{cardState.name}</h2>
        <h2>{cardState.date}</h2>
        <p>{cardState.description}</p>
        <button onClick={handleOnEdit}>Edit</button>
        <button onClick={handleOnDelete}>Delete</button>
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

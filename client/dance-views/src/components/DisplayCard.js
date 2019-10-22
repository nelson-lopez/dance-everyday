import React, { useState } from 'react';
import EditCard from './EditCard';

const DisplayCard = ({ date, description }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnEdit = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };
  if (!isClicked)
    return (
      <div>
        <h2>Event Card</h2>
        <h2>{date}</h2>
        <p>{description}</p>
        <button onClick={handleOnEdit}>Edit</button>
      </div>
    );
  else return <EditCard date={date} description={description} />;
};

export default DisplayCard;

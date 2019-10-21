import React from 'react';

const DisplayCard = ({ date, description }) => {
  return (
    <div>
      <h2>Event Card</h2>
      <h2>{date}</h2>
      <p>{description}</p>
    </div>
  );
};

export default DisplayCard;

import React from 'react';
import DisplayCard from './DisplayCard';

const EventCard = ({ date, description }) => {
  return (
    <div>
      <DisplayCard date={date} description={description} />
    </div>
  );
};

export default EventCard;

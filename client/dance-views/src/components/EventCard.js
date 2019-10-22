import React from 'react';
import DisplayCard from './DisplayCard';

const EventCard = ({ date, description, handleDelete, id }) => {
  return (
    <div>
      <DisplayCard
        date={date}
        description={description}
        id={id}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default EventCard;

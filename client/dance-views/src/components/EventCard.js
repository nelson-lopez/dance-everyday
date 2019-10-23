import React from 'react';
import DisplayCard from './DisplayCard';

const EventCard = ({ date, description, handleDelete, id, name }) => {
  console.log(name);
  return (
    <div>
      <DisplayCard
        date={date}
        description={description}
        id={id}
        handleDelete={handleDelete}
        name={name}
      />
    </div>
  );
};

export default EventCard;

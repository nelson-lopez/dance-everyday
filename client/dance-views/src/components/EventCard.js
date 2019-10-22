import React from 'react';
import DisplayCard from './DisplayCard';

const EventCard = ({ date, description, handleDelete, id, name }) => {
  return (
    <div>
      <img
        src={
          'https://images.pexels.com/photos/270837/pexels-photo-270837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
        alt="test"
      />
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

import React from 'react';
import DisplayCard from './DisplayCard';
import EditCard from './EditCard';

const EventCard = ({ date, description }) => {
  return (
    <div>
      <DisplayCard date={date} description={description} />
      <DisplayCard date={date} description={description} />
      <DisplayCard date={date} description={description} />
      <DisplayCard date={date} description={description} />
      <DisplayCard date={date} description={description} />
      <DisplayCard date={date} description={description} />

      <EditCard />
    </div>
  );
};

export default EventCard;

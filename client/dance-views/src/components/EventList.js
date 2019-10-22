import React, { useState } from 'react';
import EventCard from './EventCard';

const EventList = () => {
  const [eventInfo, setEventInfo] = useState({
    date: '11/21/2019',
    description:
      'Event discription:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor'
  });
  const [count, setCount] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div>
      event list placeholders
      {count.map(() => {
        return (
          <EventCard
            date={eventInfo.date}
            description={eventInfo.description}
          />
        );
      })}
    </div>
  );
};

export default EventList;

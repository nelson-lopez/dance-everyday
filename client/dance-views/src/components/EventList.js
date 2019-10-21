import React, { useState } from 'react';
import EventCard from './EventCard';

const EventList = () => {
  const [eventInfo, setEventInfo] = useState({
    date: '11/21/2019',
    description:
      'Event discription:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor'
  });
  return (
    <div>
      event list placeholders
      <EventCard date={eventInfo.date} description={eventInfo.description} />
    </div>
  );
};

export default EventList;

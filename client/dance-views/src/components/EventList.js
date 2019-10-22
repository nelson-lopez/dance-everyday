import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';

const EventList = () => {
  const [eventInfo, setEventInfo] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:9876/api/event').then(res => {
      setEventInfo(res.data.events.slice(0, 12));
    });
  }, []);
  console.log(eventInfo);

  const handleDelete = id => {
    console.log('deleted', id);
  };
  if (eventInfo) {
    return (
      <div>
        {eventInfo.map((obj, index) => {
          return (
            <EventCard
              name={obj.event_name}
              key={obj.id}
              date={obj.event_date}
              description={obj.event_description}
              id={obj.id}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    );
  } else return <div>Loading..</div>;
};

export default EventList;

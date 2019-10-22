import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from './EventCard';

const EventList = () => {
  const [eventInfo, setEventInfo] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:9876/api/events').then(res => {
      setEventInfo(res.data.events.slice(0, 12));
    });
  }, []);
  console.log(eventInfo);

  const handleDelete = id => {
    console.log('deleted', id);
  };
  if (eventInfo) {
    return (
      <div className="flex-container">
        {eventInfo.map((obj, index) => {
          return (
            <EventCard
              name={obj.name}
              key={obj.id}
              date={obj.date}
              description={obj.description}
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

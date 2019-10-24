import React, { useState, useEffect } from 'react';
import apiDelete from './api/apiDelete';
import axios from 'axios';
import EventCard from './EventCard';

const EventList = ({ newEvent, newSearchList }) => {
  const [eventInfo, setEventInfo] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:9876/api/events').then(res => {
      setEventInfo(res.data.data);
    });
  }, []);

  useEffect(() => {
    if (newEvent) {
      axios
        .post('http://localhost:9876/api/events', {
          name: newEvent.name,
          date: newEvent.date,
          description: newEvent.description
        })
        .then(res => console.log(res));
      axios.get('http://localhost:9876/api/events').then(res => {
        setEventInfo(res.data.data);
      });
    }
  }, [newEvent]);

  const handleDelete = id => {
    apiDelete(id);
    setEventInfo(eventInfo.filter(obj => obj.id !== id));
  };
  if (newSearchList) {
    return (
      <div className="flex-container">
        {newSearchList.map(obj => {
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
  }
  if (eventInfo) {
    return (
      <div className="flex-container">
        {eventInfo.map(obj => {
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

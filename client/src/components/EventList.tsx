import React, { useState, useEffect } from "react";
import apiDelete from "./api/apiDelete";
import axios from "axios";
import DisplayCard from "./DisplayCard";
import { EventListProps } from "./types/event.interfaces";
import { EventInterface } from "./types/event.interfaces";

/**
 *
 * * Event info is designed to trigger our CRUD operations and distribute results across the view
 */
const EventList = ({ newSearchList, newList }: EventListProps) => {
  const [eventInfo, setEventInfo] = useState(newSearchList);
  const [events, setEvents] = useState(newSearchList);

  /**
   * TODO Refactor logic here and implement helper hooks to handle CRUD
   */
  // GET
  useEffect(() => {
    axios.get("http://localhost:3001/events").then(res => {
      setEventInfo(res.data);
    });
  }, []);

  useEffect(() => {
    if (newList === true) {
      console.log(newList);
      axios.get("http://localhost:3001/events").then(res => {
        console.log(res);
        setEvents(res.data);
      });
    }
  }, [newList]);

  // DELETE
  const handleDelete = (id: number): void => {
    apiDelete(id);
    if (eventInfo) {
      setEventInfo(eventInfo.filter(obj => obj.id !== id));
    }
  };

  if (events !== null) {
    console.log(events);
    return (
      <div className="flex-container">
        {events.map(obj => {
          return (
            <DisplayCard
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
  } else if (newSearchList) {
    return (
      <div className="flex-container">
        {newSearchList.map(obj => {
          return (
            <DisplayCard
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
  } else if (eventInfo) {
    return (
      <div className="flex-container">
        {eventInfo.map(obj => {
          return (
            <DisplayCard
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

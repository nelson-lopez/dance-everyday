import React, { useState, useEffect } from "react";
import apiDelete from "./api/apiDelete";
import axios from "axios";
import DisplayCard from "./DisplayCard";

/**
 *
 * * Event info is designed to trigger our CRUD operations and distribute results across the view
 */
const EventList = ({ newEvent, newSearchList }) => {
  const [eventInfo, setEventInfo] = useState(null);
  const [newEventList, setNewEventList] = useState(false);

  /**
   * TODO Refactor logic here and implement helper hooks to handle CRUD
   */

  // GET
  useEffect(() => {
    axios.get("http://localhost:3001/events").then(res => {
      setEventInfo(res.data);
    });
    if (newEventList) {
      axios.get("http://localhost:3001/events").then(res => {
        setEventInfo(res.data);
        setNewEventList(false);
      });
    }
  }, [newEventList]);

  // POST
  useEffect(() => {
    if (newEvent) {
      console.log(newEvent);
      axios
        .post("http://localhost:3001/events/create", {
          name: newEvent.name,
          date: newEvent.date,
          description: newEvent.description,
          venueName: newEvent.venueName
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
      setNewEventList(true);
    }
  }, [newEvent]);

  // DELETE
  const handleDelete = (id: number): void => {
    apiDelete(id);
    setEventInfo(eventInfo.filter(obj => obj.id !== id));
  };
  if (newSearchList) {
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
  }
  if (eventInfo) {
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

import React, { useState, useEffect } from "react";
import apiDelete from "./api/apiDelete";
import DisplayCard from "./DisplayCard";
import { EventListProps } from "./types/event.interfaces";
import { apiGet } from "./api/apiGet";
import { apiGetSearch } from "./api/apiGetSearch";

/**
 *
 * * Event info is designed to trigger our CRUD operations and distribute results across the view
 */
const EventList = ({ searchInput, newSearchList }: EventListProps) => {
  const [eventInfo, setEventInfo] = useState(newSearchList);

  // GET
  useEffect(() => {
    apiGet(setEventInfo);
  }, []);

  useEffect(() => {
    if (searchInput.length > 2) {
      apiGetSearch(searchInput, setEventInfo);
    }
  }, [searchInput]);

  // DELETE
  const handleDelete = (id: number): void => {
    apiDelete(id);
    if (eventInfo) {
      setEventInfo(eventInfo.filter(obj => obj.id !== id));
    }
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

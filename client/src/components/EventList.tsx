import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import { EventListProps, EventInterface } from "./types/event.interfaces";
import { eventsApiGet } from "./api/events/events.apiGet";
import { eventsApiGetSearch } from "./api/events/events.apiGetSearch";
import eventsApiDelete from "./api/events/events.apiDelete";

/**
 *
 * * Event info is designed to trigger our CRUD operations and distribute results across the view
 */
const EventList = ({ searchInput, newSearchList }: EventListProps) => {
  const [eventInfo, setEventInfo] = useState<EventInterface[] | null>(null);

  // GET
  useEffect(() => {
    eventsApiGet(setEventInfo);
  }, []);

  useEffect(() => {
    if (searchInput.length > 2) {
      eventsApiGetSearch(searchInput, setEventInfo);
    }
  }, [searchInput]);

  // DELETE
  const handleDelete = (id: number): void => {
    eventsApiDelete(id);
    if (eventInfo) {
      setEventInfo(eventInfo.filter(obj => obj.id !== id));
    }
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
  } else if (eventInfo) {
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

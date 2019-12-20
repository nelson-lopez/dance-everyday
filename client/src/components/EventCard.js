import React from "react";
import DisplayCard from "./DisplayCard";

/**
 * TODO Find a way to remove obsolete EventCard component while keeping css intact
 */

const EventCard = ({ date, description, handleDelete, id, name }) => {
  return (
    <div>
      <DisplayCard
        date={date}
        description={description}
        id={id}
        handleDelete={handleDelete}
        name={name}
      />
    </div>
  );
};

export default EventCard;

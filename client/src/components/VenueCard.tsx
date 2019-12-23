import React from "react";
import { Venue } from "./types/venue.interfaces";

const VenueCard = (props: Venue) => {
  return (
    <div className="card">
      <img
        src={
          "https://images.pexels.com/photos/270837/pexels-photo-270837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        alt="test"
      />

      <h2>{props.name}</h2>
      <h2>{props.location}</h2>
      <p>Phone: {props.phone}</p>
    </div>
  );
};

export default VenueCard;

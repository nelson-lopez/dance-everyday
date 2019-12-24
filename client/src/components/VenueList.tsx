import React, { useState, useEffect } from "react";
import { venueApiGet } from "../api/venues/venue.apiGet";
import { Venue } from "../types/venue.interfaces";
import Nav from "./Nav";
import Header from "./Header";
import VenueCard from "./VenueCard";

const VenueList = () => {
  const [venueList, setVenueList] = useState<Venue[] | null>(null);

  useEffect(() => {
    venueApiGet(setVenueList);
  }, []);

  if (venueList) {
    return (
      <div>
        <Header />
        <Nav />
        <div className="flex-container">
          {venueList.map(venue => {
            return (
              <VenueCard
                name={venue.name}
                location={venue.location}
                phone={venue.phone}
                id={venue.id}
                events={venue.events}
                createdAt={venue.createdAt}
              />
            );
          })}
        </div>
      </div>
    );
  } else return <div> loading..</div>;
};

export default VenueList;

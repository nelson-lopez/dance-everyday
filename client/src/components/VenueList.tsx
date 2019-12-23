import React, { useState, useEffect } from "react";
import { venueApiGet } from "./api/venues/venue.apiGet";
import { Venue } from "./types/venue.interfaces";

const VenueList = () => {
  const [venueList, setVenueList] = useState<Venue[] | null>(null);

  useEffect(() => {
    venueApiGet(setVenueList);
  }, []);

  return <div></div>;
};

export default VenueList;

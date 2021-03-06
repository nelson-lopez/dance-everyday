import { venueApiHelper } from "./venue.apiHelper";
import { Venue } from "../../types/venue.interfaces";

export const venueApiGet = (setVenueInfo: (data: Venue[]) => void) => {
  const url: string = "http://localhost:3001/venues";
  const method: string = "GET";
  venueApiHelper(url, method, setVenueInfo);
};

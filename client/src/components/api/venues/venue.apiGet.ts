import { Venue } from "../../types/venue.interfaces";
import { venueApiHelper } from "./venue.apiHelper";

export const venueApiGet = (setVenueInfo: (data: Venue[]) => void) => {
  const url: string =
    "https://cors-anywhere.herokuapp.com/http://dance-everyday-prod.us-east-1.elasticbeanstalk.com/venues";
  const method: string = "GET";
  venueApiHelper(url, method, setVenueInfo);
};
